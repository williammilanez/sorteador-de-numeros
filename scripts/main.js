import { obterDadosFormulario } from "./sorteio.js";
import { elementos } from "./ui.js";

function iniciarAplicacao() {
  elementos.btnSortear.addEventListener("click", handleSortear);

  elementos.btnVoltar.addEventListener("click", () => {
    console.log("Voltar");
  });

  elementos.btnNovamente.addEventListener("click", () => {
    console.log("Sortear novamente");
  });
}

function handleSortear() {
  const dados = obterDadosFormulario(elementos);

  console.log("Dados capturados:");
  console.log(dados);
}

iniciarAplicacao();
