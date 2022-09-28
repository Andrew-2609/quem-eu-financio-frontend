import { MouseEvent } from 'react'
import ButtonWithStateModal from './ButtonWithStateModal'

type NavbarProps = {
  buscarPresidentes: (event: MouseEvent, pageName: string) => void
  buscarCandidatosPorEstado: (event: MouseEvent, pageName: string, estado: string) => void
}

type TipoCandidato = {
  tipo: string
  valor: string
}

const tipoCandidatos: Array<TipoCandidato> = [
  { tipo: 'governadores', valor: 'Governadores' },
  { tipo: 'senadores', valor: 'Senadores' },
  { tipo: 'deputados-federais', valor: 'Deputados Federais' },
  { tipo: 'deputados-estaduais', valor: 'Deputados Estaduais' }
]

function Navbar({ buscarPresidentes, buscarCandidatosPorEstado }: NavbarProps) {
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center py-3">
      <button onClick={(event) => buscarPresidentes(event, 'presidentes')}>Presidentes</button>
      {tipoCandidatos.map((tipoCandidato, index) => (
        <ButtonWithStateModal
          key={index}
          tipoCandidato={tipoCandidato.tipo}
          id={`btn-${tipoCandidato.tipo}`}
          buscarCandidatosPorEstado={(event, pageName, estado) =>
            buscarCandidatosPorEstado(event, pageName, estado)
          }>
          {tipoCandidato.valor}
        </ButtonWithStateModal>
      ))}
    </nav>
  )
}

export default Navbar
