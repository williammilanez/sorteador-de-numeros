export const elementos = {
  form: document.querySelector("#form-sorteio"),

  quantidade: document.querySelector("#quantidade"),
  minimo: document.querySelector("#minimo"),
  maximo: document.querySelector("#maximo"),
  naoRepetir: document.querySelector("#nao-repetir"),

  btnSortear: document.querySelector("#btn-sortear"),
  btnNovamente: document.querySelector("#btn-novamente"),
  btnVoltar: document.querySelector("#btn-voltar"),

  mensagemErro: document.querySelector("#mensagem-erro"),

  screenForm: document.querySelector("#screen-form"),
  screenResultado: document.querySelector("#screen-resultado"),

  resultadoContainer: document.querySelector("#result-numbers"),
  resultadoLabel: document.querySelector("#resultado-label"),
};

export function mostrarErro(mensagem) {
  elementos.mensagemErro.textContent = mensagem;
}

export function limparErro() {
  elementos.mensagemErro.textContent = "";
}

export function mostrarTelaResultado() {
  elementos.screenForm.classList.add("hidden");
  elementos.screenResultado.classList.remove("hidden");
}

export function mostrarTelaFormulario() {
  elementos.screenResultado.classList.add("hidden");
  elementos.screenForm.classList.remove("hidden");
}

export function limparResultados() {
  elementos.resultadoContainer.innerHTML = "";
}

export function renderizarResultados(numeros) {
  limparResultados();

  numeros.forEach((numero) => {
    const chip = document.createElement("div");

    chip.classList.add("number-chip");
    chip.textContent = numero;

    elementos.resultadoContainer.appendChild(chip);
  });
}

export function atualizarLabelResultado(contador) {
  elementos.resultadoLabel.textContent = `${contador}º resultado`;
}
