import { useEffect, useState } from "react";

import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useFormState } from "@/hooks";
import { useProgressForm } from "@/store";

function MarketDynamics() {
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useFormState("");

  const { setMarketSize } = useProgressForm();

  useEffect(() => {
    setMarketSize([score, feedback]);
  }, [score, feedback]);

  return (
    <TableRow>
      <TableCell noWrap>3.5. Dinâmica do setor e Tamanho de mercado</TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar se os empreendedores conhecem bem a dinâmica do seu setor de
          atuação e se realizaram o calculo do seu tamanho de mercado
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Como é o seu setor de atuação e qual é o tamanho do mercado?
        </Text>
      </TableCell>
      <TableCellSelector
        items={scoreItems}
        placeholder="Digite aqui..."
        onChange={setScore}
      />
      <TableCellInput
        placeholder="Digite aqui..."
        value={feedback}
        onChange={setFeedback}
      />
    </TableRow>
  );
}

export default MarketDynamics;
