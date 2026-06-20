export function obterDadosFormulario(elementos) {
  return {
    quantidade: Number(elementos.quantidade.value),
    minimo: Number(elementos.minimo.value),
    maximo: Number(elementos.maximo.value),
    naoRepetir: elementos.naoRepetir.checked,
  };
}
