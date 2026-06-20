export function obterDadosFormulario(elementos) {
  return {
    quantidade: elementos.quantidade.value.trim(),
    minimo: elementos.minimo.value.trim(),
    maximo: elementos.maximo.value.trim(),
    naoRepetir: elementos.naoRepetir.checked,
  };
}

export function validarDados(dados) {
  const { quantidade, minimo, maximo, naoRepetir } = dados;

  if (!quantidade || !minimo || !maximo) {
    return "Preencha todos os campos.";
  }

  const quantidadeNumero = Number(quantidade);
  const minimoNumero = Number(minimo);
  const maximoNumero = Number(maximo);

  if (quantidadeNumero <= 0) {
    return "A quantidade deve ser maior que zero.";
  }

  if (maximoNumero <= minimoNumero) {
    return "O valor máximo deve ser maior que o mínimo.";
  }

  if (naoRepetir) {
    const intervaloDisponivel = maximoNumero - minimoNumero + 1;

    if (quantidadeNumero > intervaloDisponivel) {
      return "A quantidade solicitada é maior que o intervalo disponível.";
    }
  }

  return null;
}

function gerarNumeroAleatorio(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

function sortearComRepeticao(quantidade, minimo, maximo) {
  const numeros = [];

  for (let i = 0; i < quantidade; i++) {
    numeros.push(gerarNumeroAleatorio(minimo, maximo));
  }

  return numeros;
}

function sortearSemRepeticao(quantidade, minimo, maximo) {
  const numeros = [];

  while (numeros.length < quantidade) {
    const numero = gerarNumeroAleatorio(minimo, maximo);

    if (!numeros.includes(numero)) {
      numeros.push(numero);
    }
  }

  return numeros;
}

export function realizarSorteio(dados) {
  const { quantidade, minimo, maximo, naoRepetir } = dados;

  if (naoRepetir) {
    return sortearSemRepeticao(quantidade, minimo, maximo);
  }

  return sortearComRepeticao(quantidade, minimo, maximo);
}
