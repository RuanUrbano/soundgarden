import { carregarInformacoes } from "./soundService.js";

const teste = await carregarInformacoes();

const cardHTML = `<section class="full">
<div class="container text-center">
    <h2>Próximos eventos</h2>
</div>
<div class="container d-flex justify-content-center align-items-center">
    ${teste}
</div>
<div class="container text-center">
    <a href="eventos.html" class="btn btn-secondary">ver todos os eventos</a>
</div>
</section>`;


const card =document.createElement('div');
card.innerHTML = cardHTML;
const rodape = document.getElementById('rodape');
document.getElementById('main').insertBefore(card, rodape);
const reservarIngressos = document.querySelectorAll(".reservar-ingresso")
reservarIngressos.forEach(
    (ingresso)=>{
        ingresso.addEventListener('click', ()=>{
            const datasrc= ingresso.getAttribute('data-src')
            const mainPost = document.getElementById('mainPost')
            const poster = `<img src='${datasrc}'></img> `
            mainPost.innerHTML = poster;
        })
    }
)
