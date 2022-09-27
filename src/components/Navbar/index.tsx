import { MouseEvent } from 'react'

type AppProps = {
  onClick: (event: MouseEvent, pageName: string) => void
}

function Navbar(props: AppProps) {
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center py-3">
      <button onClick={(event) => props.onClick(event, 'presidentes')}>Presidentes</button>
      <button onClick={(event) => props.onClick(event, 'governadores')}>Governadores</button>
      <button onClick={(event) => props.onClick(event, 'senadores')}>Senadores</button>
      <button onClick={(event) => props.onClick(event, 'deputados-federais')}>
        Deputados Federais
      </button>
      <button onClick={(event) => props.onClick(event, 'deputados-estaduais')}>
        Deputados Estaduais
      </button>
    </nav>
  )
}

export default Navbar
