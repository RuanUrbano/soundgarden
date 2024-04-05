import { carregarInformacoes } from "./soundService.js";

const teste = await carregarInformacoes(10);

const cardHTML = `<section class="full">
<div class="container text-center">
    <h2>Próximos eventos</h2>
</div>
<div class="container d-flex justify-content-center align-items-center">
    ${teste}
</div>
</section>`;

const card =document.createElement('div');
card.innerHTML = cardHTML;
const rodape = document.getElementById('rodape');
console.log(card);
document.getElementById('main').insertBefore(card, rodape);
const reservarIngressos = document.querySelectorAll(".reservar-ingresso")
reservarIngressos.forEach(
    (ingresso)=>{
        ingresso.addEventListener('click', ()=>{
            const datasrc= ingresso.getAttribute('data-src')
            const mainPost = document.getElementById('mainPost')
            const poster = `<a href="https://minhaentrada.com.br/"><img  src='${datasrc}'></img></a> `
            mainPost.innerHTML = poster;
        })
    }
)

