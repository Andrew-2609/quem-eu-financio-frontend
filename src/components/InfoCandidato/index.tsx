import autoAnimate from '@formkit/auto-animate'
import { useEffect, useRef, useState } from 'react'
import FundaoCandidato, { FundaoEleitoral } from './FundaoCandidato'
import './index.css'
import api from '../../services/api'
import CardCandidato from './CardCandidato'

export interface Candidato {
  id: number
  nomeUrna: string
  nomeCompleto: string
  numero: number
  confiraEm: string
}

const consultarFundaoDoCandidato = (
  { id, numero }: Candidato,
  setFundao: React.Dispatch<React.SetStateAction<undefined>>
) => {
  api
    .get(`/presidentes/fundao?id=${id}&numPartido=${numero}`)
    .then((response) => {
      setFundao(response.data)
    })
    .catch((err) => {
      console.error(`Não foi possível consultar a API :/\nErro: ${err}`)
    })
}

function InfoCandidato(candidato: Candidato) {
  const [show, setShow] = useState(false)
  const [fundao, setFundao] = useState()
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const reveal = () => {
    if (!fundao) consultarFundaoDoCandidato(candidato, setFundao)
    setShow(!show)
  }

  const fundaoSafe: FundaoEleitoral = fundao as unknown as FundaoEleitoral

  return (
    <div className="row" ref={parent}>
      <div className="col-md-6">
        <div className="info-candidato-card container my-3" onClick={reveal}>
          <CardCandidato {...candidato} />
        </div>
      </div>
      <div className="col-md-6">
        {show && (
          <div className="info-candidato-fundao container my-3">
            <FundaoCandidato {...fundaoSafe} />
          </div>
        )}
      </div>
    </div>
  )
}

export default InfoCandidato
