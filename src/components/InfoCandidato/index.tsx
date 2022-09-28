import autoAnimate from '@formkit/auto-animate'
import { useEffect, useRef, useState } from 'react'
import api from '../../services/api'
import CardCandidato from './CardCandidato'
import FundaoCandidato, { FundaoEleitoral } from './FundaoCandidato'
import './index.css'

export type InfoCandidatoProps = {
  id: number
  nomeUrna: string
  nomeCompleto: string
  numero: number
  confiraEm: string
  tipoCandidato: string
  estado?: string
}

const handleUrl = (tipoCandidato: string, id: number, numero: number, estado?: string): string => {
  if (tipoCandidato === 'presidentes') {
    return `/${tipoCandidato}/fundao?id=${id}&numPartido=${numero}`
  }

  return `/${tipoCandidato}/${estado}/fundao?id=${id}&numero=${numero}`
}

function InfoCandidato(candidato: InfoCandidatoProps) {
  const [show, setShow] = useState(false)
  const [fundao, setFundao] = useState()
  const parent = useRef(null)

  const consultarFundaoDoCandidato = (candidato: InfoCandidatoProps) => {
    api
      .get(handleUrl(candidato.tipoCandidato, candidato.id, candidato.numero, candidato.estado))
      .then((response) => {
        setFundao(response.data)
      })
      .catch((err) => {
        console.error(`Não foi possível consultar a API :/\nErro: ${err}`)
      })
  }

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const reveal = () => {
    if (!fundao) consultarFundaoDoCandidato(candidato)
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
