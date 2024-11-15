function criaCartao(categoria, pergunta, resposta) {
  let cartao = document.createElement("article");

  cartao.className = "cartao";
  cartao.innerHTML = `
    <div class="cartao__conteudo">
          <h3>${categoria}</h3>
          <div class="cartao__conteudo__pergunta">
            <p>${pergunta}</p>
          </div>
          <div class="cartao__conteudo__resposta">
            <p>${resposta}</p>
          </div>
        </div>
  `;

  let respostaVisivel = false;

  function viraCartao() {
    respostaVisivel = !respostaVisivel;
    cartao.classList.toggle("active");
  }

  cartao.addEventListener("click", viraCartao);

  document.querySelector("#container").appendChild(cartao);
}

criaCartao(
  "Programação",
  "O que é JavaScript?",
  "JavaScript é uma linguagem de programação."
);
criaCartao(
  "Programação",
  "O que é CSS?",
  "CSS é uma linguagem de estilização."
);
criaCartao("Programação", "O que é HTML?", "HTML é uma linguagem de marcação.");
criaCartao("Geografia", "Qual a capital do Brasil?", "Brasília.");
criaCartao("Geografia", "Qual a capital da França?", "Paris.");
criaCartao("Geografia", "Qual a capital da Argentina?", "Buenos Aires.");
