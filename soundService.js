async function carregarInformacoes(limite) {
  const valorHTML = await fetch(`https://soundgarden-api.vercel.app/events`)
    .then((data) => {
      if (data.status !== 200) throw new Error('nao encontrado');

      return data.json();
    })
    .then((valorDoJson) => {
      const dadosDaEstrutura = [];
      var max = 0;
      if (valorDoJson.length >= limite) {
        max = limite;
      }
      if (valorDoJson.length <= limite){
        max = valorDoJson.length;
      }
      for (let i = 0; i < max; i++) {
        const dataTeste = valorDoJson[i].scheduled;
        const dataNova= new Date(dataTeste);
        console.log(dataNova.toLocaleDateString("pt-BR"))
        const estrutura = `      
          <article class="evento card p-5 m-3">
              <h2 id="nome-evento">${valorDoJson[i].name}</h2>
              <h4 id="nome-banda">${valorDoJson[i].attractions.join(', ')}</h4>
              <p id="descricao">${valorDoJson[i].description}</p>
              <p id="ticket">Ingressos disponíveis: ${valorDoJson[i].number_tickets}</p>
              <p id="dataShow">Data do show: ${dataNova.toLocaleDateString("pt-BR")}</p>
              <a href="#" id="botao1" data-src="${valorDoJson[i].poster}" class="btn btn-primary reservar-ingresso">reservar ingresso</a>
          </article>
        `;  
        dadosDaEstrutura.push(estrutura);
      }
      const dadosDaEstruturaString = dadosDaEstrutura.join('\n');
      
      const estruturaTotal = `
      <div class="container teste justify-content-center align-items-center">
        ${dadosDaEstruturaString}
      </div>
    `;
      return estruturaTotal;
    });
    
    return valorHTML;
  }
  export { carregarInformacoes };