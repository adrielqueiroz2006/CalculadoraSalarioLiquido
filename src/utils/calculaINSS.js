export const calculaINSS = (salarioBruto) => {
  if (salarioBruto <= 1320) {
    return {
      taxa: 0.075,
      efetiva: 0.075,
      valor: salarioBruto * 0.075,
    }
  } else if (salarioBruto <= 2571.29) {
    const taxa = 0.09
    const valor = (salarioBruto - 1302.01) * taxa + 99
    return {
      taxa,
      efetiva: valor / salarioBruto,
      valor,
    }
  } else if (salarioBruto <= 3856.94) {
    const taxa = 0.12
    const valor = (salarioBruto - 2571.3) * taxa + 99 + 112.6161
    return {
      taxa,
      efetiva: valor / salarioBruto,
      valor,
    }
  } else if (salarioBruto <= 7507.49) {
    const taxa = 0.14
    const valor = (salarioBruto - 3856.95) * taxa + 99 + 112.6161 + 154.278
    return {
      taxa,
      efetiva: valor / salarioBruto,
      valor,
    }
  } else {
    const taxa = "TETO"
    const valor = 828.39
    return {
      taxa,
      efetiva: valor / salarioBruto,
      valor,
    }
  }
}
