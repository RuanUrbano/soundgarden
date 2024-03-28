function carregarInformacoes() {
    fetch(`https://soundgarden-api.vercel.app/events`)
      .then((data) => {
        if (data.status !== 200) throw new Error('nao encontrado');
        return data.json();
      })
      .then((valorDoJson) => {

        "name, poster, attractions, descrição, scheduled"
        const nome = document.getElementById('nome');
        const mostrarNome = `<h5>Olá ${valorDoJson.name}, seja bem vindo!</h5>`
        nome.innerHTML = valorDoJson.name ==null? '<h5>Usuário nulo</h5>': mostrarNome;
        //avatar
        const content = document.getElementById('content');
        const avatar = `<img src="${valorDoJson.avatar_url}" class="card-img-top" alt="foto">`;
        content.innerHTML = avatar;
        //
        console.log(valorDoJson);
        //Quantidade de followers
        const follow = document.getElementById('follow');
        const qntFollo = `<li class="list-group-item">Quantidade de seguidores: ${valorDoJson.followers}</li>`;
        follow.innerHTML = qntFollo;
        //Acessar pag
        const perfil = document.getElementById('perfil');
        const acessar = `<a  class="btn btn-info" href= ${valorDoJson.html_url} target="_blank">Acessar Perfil</a>`;
        perfil.innerHTML = acessar;
        //número de repositório
        const repositorio = document.getElementById('repositorio');
        const qnt = valorDoJson.public_gists + valorDoJson.public_repos;
        const qntRepos = `<li class="list-group-item">Quantidades repositórios: ${qnt}</li>`;
        repositorio.innerHTML = qntRepos;
        //blog e bio
        const bio = document.getElementById('bio');
        const blog = document.getElementById('blog');
        const temBio = valorDoJson.bio;
        const temBlog = valorDoJson.blog;
        bio.innerHTML = temBio ==null ? temBlog : `<p> ${valorDoJson.bio}</p>` + `<p> ${valorDoJson.blog}</p>`;
      });
    }