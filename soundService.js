class GithubService {
    async getUser(userName) {
      try {
        const data = await fetch(`https://api.github.com/users/${userName}`);
        if (data.status !== 200) throw new Error('nao encontrado');
        return data.json();
      } catch (erro) {
        return {
          name: 'Nome inválido',
          avatar_url: 'https://bitslog.files.wordpress.com/2013/01/unknown-person1.gif',
          followers: '0',
          html_url: 'LINK VAZIO',
          public_gists: '0',
          public_repos: '',
        };
      }
    }
  
    async getRepositorios(repos_url) {
      try {
        const data = await fetch(repos_url);
        if (data.status !== 200) throw new Error('nao encontrado');
        return data.json();
      } catch (erro) {
        return [{
          id: 'SEM ID',
          name: 'SEM NOME',
          description: 'SEM DESCRIÇÃO',
          html_url: 'https://github.com/'
        }];
      }
    }
  }
  export default GithubService;