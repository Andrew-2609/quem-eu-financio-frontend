import { useEffect, useState } from 'react'
import api from '../../services/api'
import InfoCandidato, { InfoCandidatoProps } from '../InfoCandidato'

type GovernadorPageProps = {
  nomeCandidato: string
  estado: string
}

function GovernadorPage({ nomeCandidato, estado }: GovernadorPageProps) {
  const [candidatos, setCandidatos] = useState()
  const [urlBusca, setUrlBusca] = useState(`/governadores/${estado}`)

  const valorAtual = nomeCandidato
    ? `/governadores/${estado}/${nomeCandidato}`
    : `/governadores/${estado}`

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
  }, [urlBusca, estado])

  const candidatosSafe: InfoCandidatoProps[] = candidatos ? candidatos : []

  candidatosSafe.forEach((candidato) => {
    candidato.tipoCandidato = 'governadores'
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

export default GovernadorPage
