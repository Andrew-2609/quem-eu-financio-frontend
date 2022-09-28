import { MouseEvent, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import DeputadoEstadualPage from './components/Pages/DeputadoEstadualPage'
import DeputadoFederalPage from './components/Pages/DeputadoFederalPage'
import GovernadorPage from './components/Pages/GovernadorPage'
import PresidentePage from './components/Pages/PresidentePage'
import SenadorPage from './components/Pages/SenadorPage'
import SearchBar from './components/SearchBar'

function App() {
  const [displayPage, setDisplayPage] = useState('')
  const [candidatoProcurado, setCandidatoProcurado] = useState('')
  const [estado, setEstado] = useState('')

  const buscarPresidentes = (_event: MouseEvent, pageName: string) => {
    setCandidatoProcurado('')
    if (displayPage !== pageName) {
      setDisplayPage(pageName)
    }
  }

  const buscarCandidatosPorEstado = (_event: MouseEvent, pageName: string, estado: string) => {
    setCandidatoProcurado('')

    if (displayPage !== pageName) {
      setDisplayPage(pageName)
    }

    setEstado(estado)
  }

  return (
    <div id="App">
      <>
        <Navbar
          buscarPresidentes={buscarPresidentes}
          buscarCandidatosPorEstado={buscarCandidatosPorEstado}
        />
        <div className="container py-3">
          <SearchBar setCandidatoProcurado={setCandidatoProcurado} />
          {displayPage === 'presidentes' && <PresidentePage nomeCandidato={candidatoProcurado} />}
          {displayPage === 'governadores' && (
            <GovernadorPage nomeCandidato={candidatoProcurado} estado={estado} />
          )}
          {displayPage === 'senadores' && (
            <SenadorPage nomeCandidato={candidatoProcurado} estado={estado} />
          )}
          {displayPage === 'deputados-federais' && (
            <DeputadoFederalPage nomeCandidato={candidatoProcurado} estado={estado} />
          )}
          {displayPage === 'deputados-estaduais' && (
            <DeputadoEstadualPage nomeCandidato={candidatoProcurado} estado={estado} />
          )}
        </div>
      </>
    </div>
  )
}

export default App
