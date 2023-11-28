export const calculaIRPF = (salarioBruto) => {
  if (salarioBruto <= 2112.0) {
    return {
      valor: 0,
      taxa: 0,
    }
  } else if (salarioBruto <= 2826.65) {
    return {
      valor: salarioBruto * 0.075 - 158.4,
      taxa: 0.075,
    }
  } else if (salarioBruto <= 3751.05) {
    return {
      valor: salarioBruto * 0.15 - 370.4,
      taxa: 0.15,
    }
  } else if (salarioBruto <= 4664.68) {
    return {
      valor: salarioBruto * 0.225 - 651.73,
      taxa: 0.225,
    }
  } else {
    return {
      valor: salarioBruto * 0.275 - 884.96,
      taxa: 0.275,
    }
  }
}
