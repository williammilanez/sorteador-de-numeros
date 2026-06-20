import {
  obterDadosFormulario,
  realizarSorteio,
  validarDados,
} from "./sorteio.js";
import {
  atualizarLabelResultado,
  elementos,
  limparErro,
  limparSucesso,
  mostrarErro,
  mostrarSucesso,
  mostrarTelaFormulario,
  mostrarTelaResultado,
  renderizarResultados,
} from "./ui.js";

let contadorSorteios = 0;
let ultimoSorteio = null;

function iniciarAplicacao() {
  elementos.btnSortear.addEventListener("click", handleSortear);

  elementos.btnVoltar.addEventListener("click", () => {
    contadorSorteios = 0;
    mostrarTelaFormulario();
  });

  elementos.btnNovamente.addEventListener("click", () => {
    if (!ultimoSorteio) return;
    executarSorteio(ultimoSorteio);
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

  ultimoSorteio = dadosTratados;

  contadorSorteios = 0;

  executarSorteio(dadosTratados);
}

async function executarSorteio(dadosTratados) {
  elementos.btnSortear.disabled = true;

  const textoOriginal =
    elementos.btnSortear.querySelector(".label-text").textContent;

  elementos.btnSortear.querySelector(".label-text").textContent =
    "Sorteando...";

  limparSucesso();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const numerosSorteados = realizarSorteio(dadosTratados);

  contadorSorteios++;

  atualizarLabelResultado(contadorSorteios);

  renderizarResultados(numerosSorteados);

  mostrarTelaResultado();

  mostrarSucesso("Sorteio realizado com sucesso!");

  elementos.btnSortear.disabled = false;

  elementos.btnSortear.querySelector(".label-text").textContent = textoOriginal;
}

iniciarAplicacao();
