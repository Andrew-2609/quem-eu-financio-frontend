/* eslint-disable react/no-unescaped-entities */
function PaginaInicial() {
  return (
    <div className="container mt-4">
      <header>
        <h3>Olá, meu nome é Andrew, e seja-bem vindo(a) ao "Quem eu Financio?"</h3>
      </header>

      <section className="my-4" id="secao-apresentacao">
        <p>
          Esse projeto é fruto da minha insatisfação pessoal com a política brasileira,
          especialmente no que diz respeito ao mal uso dos cofres públicos.
        </p>

        <p>
          Se você compartilha do mesmo sentimento, sinta-se livre para explorar os gastos de cada
          categoria de candidatos no menu acima. Com exceção dos presidentes, todos os outros são
          separados por suas <em>Unidades Federativas</em>.
        </p>

        <p>
          🢂 As informações devem ser atualizadas semanalmente, e são um reflexo do que está exposto
          oficialmente pelo <strong>Tribunal Superior Eleitoral</strong> - eu não apurei nem muito
          menos inventei os dados dos candidatos.
        </p>
      </section>

      <section id="secao-tecnica">
        <h4>Informações Técnicas</h4>

        <p>
          Não manjo muito de React, então esse projeto possui suas fragilidades. Sinta-se livre para
          fazer algo melhor a partir dele ou até mesmo abrir um <em>pull request</em> para
          melhorá-lo s2.
        </p>

        <p>
          O back-end foi feito com Node.js, e também está disponível no meu GitHub. Sinta-se livre
          pra fazer o que eu disse acima nesse projeto também!
        </p>

        <p>
          <strong>Se der uma estrelinha é humilde ⭐</strong>
        </p>
      </section>

      <footer>
        <p>
          Backend:{' '}
          <a
            href="https://github.com/Andrew-2609/quem-eu-financio"
            target="_blank"
            rel="noreferrer">
            https://github.com/Andrew-2609/quem-eu-financio
          </a>
          <br />
          Frontend:{' '}
          <a
            href="https://github.com/Andrew-2609/quem-eu-financio-frontend"
            target="_blank"
            rel="noreferrer">
            https://github.com/Andrew-2609/quem-eu-financio-frontend
          </a>
        </p>

        <section className="my-5 text-center" id="secao-footer-img">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg"
            width="300rem"
          />
        </section>
      </footer>
    </div>
  )
}

export default PaginaInicial
