import { useEffect, useState } from 'react'
import api from '../../../services/api'
import InfoCandidato, { InfoCandidatoProps } from '../../InfoCandidato'

type DeputadoFederalPageProps = {
  nomeCandidato: string
  estado: string
}

function DeputadoFederalPage({ nomeCandidato, estado }: DeputadoFederalPageProps) {
  const [candidatos, setCandidatos] = useState()
  const [urlBusca, setUrlBusca] = useState(`/deputados-federais/${estado}`)

  const valorAtual = nomeCandidato
    ? `/deputados-federais/${estado}/${nomeCandidato}`
    : `/deputados-federais/${estado}`

  if (urlBusca !== valorAtual) {
    setUrlBusca(valorAtual)
  }

  useEffect(() => {
    api
      .get(urlBusca)
      .then((response) => {
        setCandidatos(response.data)
      })
      .catch((err: Error) => {
        console.error(`Não foi possível consultar a API :/\nErro: ${err}`)
      })
  }, [urlBusca, estado])

  const candidatosSafe: InfoCandidatoProps[] = candidatos ? candidatos : []

  candidatosSafe.forEach((candidato) => {
    candidato.tipoCandidato = 'deputados-federais'
    candidato.estado = estado
  })

  return (
    <>
      {candidatosSafe.map((candidato) => (
        <InfoCandidato {...candidato} key={candidato.id} />
      ))}
    </>
  )
}

export default DeputadoFederalPage
