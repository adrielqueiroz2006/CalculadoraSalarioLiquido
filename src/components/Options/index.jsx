import React, { useEffect, useState } from "react"
import {
  Button,
  Container,
  InputGroup,
  InputSalario,
  InputTitle,
  OptionsContainer,
  Real,
  Separator,
  Valor,
  Wrapper,
} from "./styles"
import { calculaIRPF } from "../../utils/calculaIRPF"
import { calculaINSS } from "../../utils/calculaINSS"

export default function Options({ setInssValue, setIrpfValue, setSalarioBrutoValue }) {
  const [selectedOption, setSelectedOption] = useState("CLT")

  const [salarioBruto, setSalarioBruto] = useState("")

  const [valorIRPF, setValorIRPF] = useState("")
  const [taxaIRPF, setTaxaIRPF] = useState("")

  const [valorINSS, setValorINSS] = useState("")
  const [taxaINSS, setTaxaINSS] = useState("")
  const [taxaEfetiva, setTaxaEfetiva] = useState("")

  const [valorFGTS, setValorFGTS] = useState("")
  const [taxaFGTS, setTaxaFGTS] = useState("")

  function handleSelect(option) {
    setSelectedOption(option)
  }

  function handleSubmit(event) {
    if (!salarioBruto) {
      alert("Insira um valor no campo Salário Bruto!")
      return
    }

    const INSS = calculaINSS(Number(salarioBruto))
    setValorINSS(INSS.valor.toFixed(2))
    setTaxaINSS(INSS.taxa == "TETO" ? INSS.taxa : (INSS.taxa * 100).toFixed(2))
    setTaxaEfetiva((INSS.efetiva * 100).toFixed(2))
    setInssValue(INSS.valor.toFixed(2))

    const INSSSubtraido = calculaINSS(Number(salarioBruto)).valor
    const salarioSubtraido = salarioBruto - INSSSubtraido
    const IRPF = calculaIRPF(Number(salarioSubtraido))
    setValorIRPF(IRPF.valor.toFixed(2))
    setTaxaIRPF((IRPF.taxa * 100).toFixed(2))
    setIrpfValue(IRPF.valor.toFixed(2))

    setValorFGTS((Number(salarioBruto) * 0.08).toFixed(2))
    setTaxaFGTS((8).toFixed(2))

    setSalarioBrutoValue(salarioBruto)

    event.preventDefault()
  }

  return (
    <Container>
      <Wrapper onSubmit={handleSubmit}>
        <OptionsContainer>
          <div
            className={selectedOption === "CLT" ? "option selected" : "option"}
            onClick={() => handleSelect("CLT")}
          >
            CLT
          </div>
          <div
            className={selectedOption === "ESTATUTARIO" ? "option selected" : "option"}
            onClick={() => handleSelect("ESTATUTARIO")}
          >
            ESTATUTÁRIO
          </div>
        </OptionsContainer>

        <InputTitle>Salário Bruto:</InputTitle>
        <InputGroup>
          <Real>R$</Real>
          <InputSalario
            type="number"
            placeholder="2500"
            value={salarioBruto}
            onChange={(e) => setSalarioBruto(e.target.value)}
          />
        </InputGroup>

        <InputTitle>
          INSS: {taxaINSS}
          {taxaINSS > 0 && "%"}
          {taxaEfetiva && ` Efetiva: ${taxaEfetiva}%`}
        </InputTitle>
        <InputGroup>
          {valorINSS && <Real>R$</Real>}

          <Valor>{valorINSS}</Valor>
        </InputGroup>

        <InputTitle>
          IRPF Retido na fonte: {taxaIRPF}
          {taxaIRPF && "%"}
        </InputTitle>
        <InputGroup>
          {valorIRPF && <Real>R$</Real>}

          <Valor>{valorIRPF}</Valor>
        </InputGroup>

        {selectedOption == "CLT" && (
          <>
            <InputTitle>
              FGTS A depositar: {taxaFGTS}
              {taxaFGTS && "%"}
            </InputTitle>
            <InputGroup>
              {valorFGTS && <Real>R$</Real>}

              <Valor>{valorFGTS}</Valor>
            </InputGroup>
          </>
        )}

        {selectedOption == "ESTATUTARIO" && <Separator />}

        <Button type="submit">Calcular Salário</Button>
      </Wrapper>
    </Container>
  )
}
