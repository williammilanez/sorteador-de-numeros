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
