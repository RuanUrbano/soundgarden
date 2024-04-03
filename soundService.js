async function carregarInformacoes() {
  const valorHTML = await fetch(`https://soundgarden-api.vercel.app/events`)
    .then((data) => {
      if (data.status !== 200) throw new Error('nao encontrado');

      return data.json();
    })
    .then((valorDoJson) => {
      const dadosDaEstrutura = [];
      for (let i = 0; i < valorDoJson.length; i++) {
        const estrutura = `      
          <article class="evento card p-5 m-3">
              <h2 id="nome-evento">${valorDoJson[i].name}</h2>
              <h4 id="nome-banda">${valorDoJson[i].attractions.join(', ')}</h4>
              <p id="descricao">${valorDoJson[i].description}</p>
              <p id="ticket">Ingressos disponíveis: ${valorDoJson[i].number_tickets}</p>
              <a href="#" id="botao1" data-src="${valorDoJson[i].poster}" class="btn btn-primary reservar-ingresso">reservar ingresso</a>
          </article>
        `;
        dadosDaEstrutura.push(estrutura);
      }
      const dadosDaEstruturaString = dadosDaEstrutura.join('\n');
      
      const estruturaTotal = `
      <div class="container d-flex justify-content-center align-items-center">
        ${dadosDaEstruturaString}
      </div>
    `;
      return estruturaTotal;
    });
    
    return valorHTML;
  }
  export { carregarInformacoes };