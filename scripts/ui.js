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
  mensagemSucesso: document.querySelector("#mensagem-sucesso"),
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

  numeros.forEach((numero, index) => {
    const chip = document.createElement("div");

    chip.classList.add("number-chip");

    chip.style.animationDelay = `${index * 0.1}s`;
    chip.textContent = numero;

    elementos.resultadoContainer.appendChild(chip);
  });
}

export function atualizarLabelResultado(contador) {
  elementos.resultadoLabel.textContent = `${contador}º resultado`;
}

export function mostrarSucesso(mensagem) {
  elementos.mensagemSucesso.textContent = mensagem;
}

export function limparSucesso() {
  elementos.mensagemSucesso.textContent = "";
}

let estadoLoading = false;

export function iniciarLoadingSortear() {
  estadoLoading = true;

  const btns = [elementos.btnSortear, elementos.btnNovamente];

  btns.forEach((btn) => {
    btn.disabled = true;

    const label = btn.querySelector(".label-text");
    const icon = btn.querySelector("img");

    if (label) {
      label.dataset.original = label.textContent;
      label.textContent = "Sorteando...";
    }

    if (icon) {
      icon.dataset.originalDisplay = icon.style.display;
      icon.style.display = "none";
    }
  });
}

export function finalizarLoadingSortear() {
  estadoLoading = false;

  const btns = [elementos.btnSortear, elementos.btnNovamente];

  btns.forEach((btn) => {
    btn.disabled = false;

    const label = btn.querySelector(".label-text");
    const icon = btn.querySelector("img");

    if (label && label.dataset.original) {
      label.textContent = label.dataset.original;
    }

    if (icon) {
      icon.style.display = icon.dataset.originalDisplay || "";
    }
  });
}
