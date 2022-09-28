import { useState } from 'react'
import './index.css'

type SearchBarProps = {
  setCandidatoProcurado: (nomeCandidato: string) => void
}

function SearchBar({ setCandidatoProcurado }: SearchBarProps) {
  const [nomeBuscado, setNomeBuscado] = useState('')

  return (
    <div id="search-bar" className="input-group rounded my-4">
      <input
        id="search"
        className="form-control rounded"
        type="search"
        placeholder="Nome do candidato"
        aria-label="Search"
        onInput={(event) => setNomeBuscado((event.target as HTMLInputElement).value)}
        onKeyDown={({ key }) => {
          if (key === 'Enter') setCandidatoProcurado(nomeBuscado)
        }}
      />

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setCandidatoProcurado(nomeBuscado)}>
        Buscar candidato
      </button>
    </div>
  )
}

export default SearchBar
