import {
  obterDadosFormulario,
  realizarSorteio,
  validarDados,
} from "./sorteio.js";
import { elementos, limparErro, mostrarErro } from "./ui.js";

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
  limparErro();

  const dados = obterDadosFormulario(elementos);

  const erro = validarDados(dados);

  if (erro) {
    mostrarErro(erro);
    return;
  }

  const dadosTratados = {
    quantidade: Number(dados.quantidade),
    minimo: Number(dados.minimo),
    maximo: Number(dados.maximo),
    naoRepetir: dados.naoRepetir,
  };

  const numerosSorteados = realizarSorteio(dadosTratados);

  console.log("Números sorteados:");
  console.log(numerosSorteados);
}

iniciarAplicacao();
