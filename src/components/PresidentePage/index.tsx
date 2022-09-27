import { useEffect, useState } from 'react'
import api from '../../services/api'
import InfoCandidato, { Candidato } from '../InfoCandidato'

type PresidentePageProps = {
  nomeCandidato: string
}

function PresidentePage({ nomeCandidato }: PresidentePageProps) {
  const [candidatos, setCandidatos] = useState()
  const [urlBusca, setUrlBusca] = useState('/presidentes')

  const valorAtual = nomeCandidato ? `/presidentes/${nomeCandidato}` : '/presidentes'

  if (urlBusca !== valorAtual) {
    setUrlBusca(valorAtual)
  }

  useEffect(() => {
    api
      .get(urlBusca)
      .then((response) => {
        setCandidatos(response.data)
      })
      .catch((err) => {
        console.error(`Não foi possível consultar a API :/\nErro: ${err}`)
      })
  }, [urlBusca])

  const candidatosSafe: Candidato[] = candidatos ? candidatos : []

  return (
    <>
      {candidatosSafe.map((candidato) => (
        <InfoCandidato {...candidato} key={candidato.id} />
      ))}
    </>
  )
}

export default PresidentePage
