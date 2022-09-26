export interface FundaoEleitoral {
  totalLiquido: number
  fundoPartidario: number
  outrosRecursos: number
  fundoEspecial: number
}

const formatarRecurso = (recurso: number): string => {
  if (!recurso) {
    return ''
  }

  return recurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function FundaoCandidato(dados: FundaoEleitoral) {
  if (dados) {
    return (
      <div>
        <p className="info-candidato-atributo">
          Fundão Eleitoral: {formatarRecurso(dados.fundoPartidario + dados.fundoEspecial)}
        </p>
        <p className="info-candidato-atributo">
          Dinheiro Privado: {formatarRecurso(dados.outrosRecursos)}
        </p>
        <p className="info-candidato-atributo">Total: {formatarRecurso(dados.totalLiquido)}</p>
      </div>
    )
  }

  return <h3>Não foi possível obter os dados do fundão eleitoral :/</h3>
}

export default FundaoCandidato
