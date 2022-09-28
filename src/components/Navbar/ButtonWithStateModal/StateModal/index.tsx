import { ChangeEvent, MouseEvent, useState } from 'react'
import StateSelect from './StateSelect'

type StateModalProps = {
  id: string
  tipoCandidato: string
  buscarCandidatosPorEstado: (event: MouseEvent, pageName: string, estado: string) => void
}

function StateModal({ id, tipoCandidato, buscarCandidatosPorEstado }: StateModalProps) {
  const [estado, setEstado] = useState('AC')

  const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setEstado(event.target.value)
  }

  return (
    <div
      className="modal fade"
      id={id}
      tabIndex={-1}
      aria-labelledby="modalSelecaoEstado"
      aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalSelecaoEstado">
              Selecione o Estado
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <StateSelect onChange={handleChangeSelect} />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Fechar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={(event) => buscarCandidatosPorEstado(event, tipoCandidato, estado)}
              data-bs-dismiss="modal">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StateModal
