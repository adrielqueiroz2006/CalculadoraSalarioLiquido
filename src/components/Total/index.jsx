import React, { useEffect, useState } from "react"
import { Container, Image, Text, Valor, ValorCobrado } from "./styles"

export default function Total({ inss, irpf, salarioBruto }) {
  const calculaSalario = () => {
    return Number(salarioBruto - inss - irpf).toFixed(2)
  }

  const getSalario = () => {
    if (!salarioBruto) return "0.00"
    return calculaSalario()
  }

  const calculaValorCobrado = () => {
    return (Number(inss) + Number(irpf)).toFixed(2)
  }

  const getValorCobrado = () => {
    if (!inss) return "0.00"
    return calculaValorCobrado()
  }

  return (
    <Container>
      <Image src="./../../../pig.png " />
      <Text>SALÁRIO LÍQUIDO:</Text>

      <Valor>R${getSalario()}</Valor>
      <ValorCobrado>-R${getValorCobrado()}</ValorCobrado>
    </Container>
  )
}
