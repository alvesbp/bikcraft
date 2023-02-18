function animarMenu() {
  const links = document.querySelectorAll(".header-menu a");

  function ativarLink(link) {
    const url = location.href;
    const href = link.href;

    if (url.includes(href)) {
      link.classList.add("ativo");
    }
  }

  links.forEach(ativarLink);
}
animarMenu();

function paramCheck() {
  const parametros = new URLSearchParams(location.search);
  function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
      elemento.checked = true;
    }
  }

  parametros.forEach(ativarProduto);
}
paramCheck();

function ativarPergunta() {
  const perguntas = document.querySelectorAll(".perguntas button");

  function ativaPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativo");
    const ativa = resposta.classList.contains("ativo");
    pergunta.setAttribute("aria-expanded", ativa);
  }

  function eventoPerguntas(pergunta) {
    pergunta.addEventListener("click", ativaPergunta);
  }
  perguntas.forEach(eventoPerguntas);
}
ativarPergunta();

function imgFoco() {
  const galeria = document.querySelectorAll(".bicicleta-imagens img");
  const galeriaContainer = document.querySelector(".bicicleta-imagens");

  function trocarImagem() {
    if (matchMedia("(min-width: 937px)").matches) {
      galeriaContainer.prepend(this);
    }
  }

  galeria.forEach((img) => {
    img.addEventListener("click", trocarImagem);
  });
}
imgFoco();
