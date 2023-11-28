import React, { useState } from "react"
import Total from "../components/Total"
import Options from "../components/Options"

export function Calculator() {
  const [salarioBrutoValue, setSalarioBrutoValue] = useState(0)
  const [inssValue, setInssValue] = useState(0)
  const [irpfValue, setIrpfValue] = useState(0)

  return (
    <main>
      <Total inss={inssValue} irpf={irpfValue} salarioBruto={salarioBrutoValue} />
      <Options
        setInssValue={setInssValue}
        setIrpfValue={setIrpfValue}
        setSalarioBrutoValue={setSalarioBrutoValue}
      />
    </main>
  )
}
