import { MouseEvent, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import PresidentePage from './components/PresidentePage'
import SearchBar from './components/SearchBar'

function App() {
  const [displayPage, setDisplayPage] = useState('')
  const [candidatoProcurado, setCandidatoProcurado] = useState('')

  const handleClick = (_event: MouseEvent, pageName: string) => {
    if (displayPage !== pageName) {
      setDisplayPage(pageName)
    }
  }

  return (
    <div id="App">
      <>
        <Navbar onClick={handleClick} />
        <div className="container py-3">
          <SearchBar currentCandidate={displayPage} setCandidatoProcurado={setCandidatoProcurado} />
          {displayPage === 'presidentes' && <PresidentePage nomeCandidato={candidatoProcurado} />}
          {displayPage === 'governadores' && <div>Hello</div>}
        </div>
      </>
    </div>
  )
}

export default App
