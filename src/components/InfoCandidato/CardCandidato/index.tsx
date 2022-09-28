import { InfoCandidatoProps } from '..'

function CardCandidato(candidato: InfoCandidatoProps) {
  return (
    <div>
      <h1 className="info-candidato-titulo">{candidato.nomeUrna}</h1>
      <p className="info-candidato-atributo">Nome Completo: {candidato.nomeCompleto}</p>
      <p className="info-candidato-atributo">Número: {candidato.numero}</p>
      <p className="info-candidato-atributo">
        <a target="_blank" rel="noreferrer" href={candidato.confiraEm}>
          Confira Aqui
        </a>
      </p>
    </div>
  )
}

export default CardCandidato
