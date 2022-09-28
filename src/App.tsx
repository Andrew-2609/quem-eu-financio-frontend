import { MouseEvent, useState } from 'react'
import './App.css'
import GovernadorPage from './components/GovernadorPage'
import Navbar from './components/Navbar'
import PresidentePage from './components/PresidentePage'
import SearchBar from './components/SearchBar'

function App() {
  const [displayPage, setDisplayPage] = useState('')
  const [candidatoProcurado, setCandidatoProcurado] = useState('')
  const [estado, setEstado] = useState('')

  const buscarPresidentes = (_event: MouseEvent, pageName: string) => {
    if (displayPage !== pageName) {
      setDisplayPage(pageName)
    }
  }

  const buscarCandidatosPorEstado = (_event: MouseEvent, pageName: string, estado: string) => {
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
          <SearchBar currentCandidate={displayPage} setCandidatoProcurado={setCandidatoProcurado} />
          {displayPage === 'presidentes' && <PresidentePage nomeCandidato={candidatoProcurado} />}
          {displayPage === 'governadores' && (
            <GovernadorPage nomeCandidato={candidatoProcurado} estado={estado} />
          )}
        </div>
      </>
    </div>
  )
}

export default App
