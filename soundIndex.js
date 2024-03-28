

async function carregarInformacoes() {
    const segundoCard =document.getElementById('segundo-card');
    const tituloSegundocard = document.createElement('h2');
    const paraSegundocard = document.createElement('p');
    const subTituloSeg = document.createElement('h4');
    segundoCard.insertBefore(tituloSegundocard, segundoCard.childNodes[1]);
    segundoCard.insertBefore(subTituloSeg, segundoCard.childNodes[2]);
    segundoCard.insertBefore(paraSegundocard, segundoCard.childNodes[3]);
    //Muita criação igual vira função

    console.log(segundoCard)
    await fetch(`https://soundgarden-api.vercel.app/events`)
      .then((data) => {
        if (data.status !== 200) throw new Error('nao encontrado');

        return data.json();
      })
      .then((valorDoJson) => {

        //USAR FOR  para automatizar, mas como?
        tituloSegundocard.innerText=valorDoJson[1].name;
        subTituloSeg.innerText = valorDoJson[1].attractions;
        paraSegundocard.innerText = valorDoJson[1].description
        const nome = document.getElementById('nome-evento');
        const mostrarNome=valorDoJson[0].name;
        nome.innerHTML = mostrarNome;

        console.log(valorDoJson);
        //Segundo jeito, mas não tão bom
        const desc = document.getElementById('descricao');
        desc.innerHTML = valorDoJson[0].description;
        const nomeBanda = document.getElementById('nome-banda');
        nomeBanda.innerHTML = valorDoJson[0].attractions;
        
        const botao1 = document.getElementById('botao1');
        const poster = document.getElementById('POSTER');
        poster.innerHTML = `<img src="${valorDoJson[0].poster}" width="500px"`;
      });
    }


    document.body.onload=carregarInformacoes;