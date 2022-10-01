import { MouseEvent } from 'react'
import StateModal from './StateModal'

type ButtonWithStateModalProps = {
  className: string
  id: string
  children: string
  tipoCandidato: string
  buscarCandidatosPorEstado: (event: MouseEvent, pageName: string, estado: string) => void
}

function ButtonWithStateModal({
  className,
  id,
  tipoCandidato,
  children,
  buscarCandidatosPorEstado
}: ButtonWithStateModalProps) {
  return (
    <>
      <button className={className} type="button" data-bs-toggle="modal" data-bs-target={`#${id}`}>
        {children}
      </button>

      <StateModal
        id={id}
        tipoCandidato={tipoCandidato}
        buscarCandidatosPorEstado={buscarCandidatosPorEstado}
      />
    </>
  )
}

export default ButtonWithStateModal
