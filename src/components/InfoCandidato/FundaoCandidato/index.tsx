import './index.css'

export interface FundaoEleitoral {
  totalLiquido: number
  fundoPartidario: number
  outrosRecursos: number
  fundoEspecial: number
}

const formatarRecurso = (recurso: number): string => {
  if (recurso !== 0 && !recurso) {
    return '~'
  }

  return recurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function FundaoCandidato(dados: FundaoEleitoral) {
  if (dados) {
    const fundaoEleitoral = dados.fundoPartidario + dados.fundoEspecial
    return (
      <div>
        <p
          className={
            fundaoEleitoral ? 'info-candidato-atributo vermelho' : 'info-candidato-atributo azul'
          }>
          Fundão Eleitoral: {formatarRecurso(fundaoEleitoral)}
        </p>
        <p className="info-candidato-atributo">
          Dinheiro Privado: {formatarRecurso(dados.outrosRecursos)}
        </p>
        <p
          className={
            fundaoEleitoral ? 'info-candidato-atributo vermelho' : 'info-candidato-atributo azul'
          }>
          Total: {formatarRecurso(dados.totalLiquido)}
        </p>
      </div>
    )
  }

  return <h3>Não foi possível obter os dados do fundão eleitoral :/</h3>
}

export default FundaoCandidato
