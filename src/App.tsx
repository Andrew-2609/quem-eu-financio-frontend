import { useEffect, useState } from 'react'
import InfoCandidato, { Candidato } from './components/InfoCandidato'
import './App.css'
import api from './services/api'

function App() {
  const [candidatos, setCandidatos] = useState()

  useEffect(() => {
    api
      .get('/presidentes')
      .then((response) => {
        setCandidatos(response.data)
      })
      .catch((err) => {
        console.error(`Não foi possível consultar a API :/\nErro: ${err}`)
      })
  }, [])

  const candidatosSafe: Candidato[] = candidatos ? candidatos : []

  return (
    <div id="App" className="container py-5">
      {candidatosSafe.map((candidato) => (
        <InfoCandidato {...candidato} key={candidato.id} />
      ))}
    </div>
  )
}

export default App
