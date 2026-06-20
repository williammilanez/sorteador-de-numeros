import {
  obterDadosFormulario,
  realizarSorteio,
  validarDados,
} from "./sorteio.js";
import {
  atualizarLabelResultado,
  elementos,
  limparErro,
  mostrarErro,
  mostrarTelaFormulario,
  mostrarTelaResultado,
  renderizarResultados,
} from "./ui.js";

let contadorSorteios = 0;

function iniciarAplicacao() {
  elementos.btnSortear.addEventListener("click", handleSortear);

  elementos.btnVoltar.addEventListener("click", () => {
    mostrarTelaFormulario();
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

  contadorSorteios++;

  atualizarLabelResultado(contadorSorteios);

  renderizarResultados(numerosSorteados);

  mostrarTelaResultado();
}

iniciarAplicacao();
