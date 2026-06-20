import {
  obterDadosFormulario,
  realizarSorteio,
  validarDados,
} from "./sorteio.js";
import {
  atualizarLabelResultado,
  elementos,
  finalizarLoadingSortear,
  iniciarLoadingSortear,
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
  iniciarLoadingSortear();
  limparSucesso();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const numerosSorteados = realizarSorteio(dadosTratados);

  contadorSorteios++;

  atualizarLabelResultado(contadorSorteios);

  renderizarResultados(numerosSorteados);

  mostrarTelaResultado();

  mostrarSucesso("Sorteio realizado com sucesso!");

  finalizarLoadingSortear();
}

iniciarAplicacao();
