import { useEffect, useState } from 'react'
import api from '../../../services/api'
import InfoCandidato, { InfoCandidatoProps } from '../../InfoCandidato'

type SenadorPageProps = {
  nomeCandidato: string
  estado: string
}

function SenadorPage({ nomeCandidato, estado }: SenadorPageProps) {
  const [candidatos, setCandidatos] = useState()
  const [urlBusca, setUrlBusca] = useState(`/senadores/${estado}`)

  const valorAtual = nomeCandidato
    ? `/senadores/${estado}/${nomeCandidato}`
    : `/senadores/${estado}`

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
    candidato.tipoCandidato = 'senadores'
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

export default SenadorPage
