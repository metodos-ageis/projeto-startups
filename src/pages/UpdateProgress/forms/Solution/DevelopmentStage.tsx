import { useEffect, useState } from "react";

import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useFormState } from "@/hooks";
import { useProgressForm } from "@/store";

function DevelopmentStage() {
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useFormState("");

  const { setDevelopmentState } = useProgressForm();

  useEffect(() => {
    setDevelopmentState([score, feedback]);
  }, [score, feedback]);

  return (
    <TableRow>
      <TableCell noWrap>2.1. Estágio de desenvolvimento</TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar e acompanhar o estágio de desenvolvimento da tecnologia. A
          escala proposta vem da metodologia TRL (Technology Readiness Levels).
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Qual é o estágio de desenvolvimento da sua solução?
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

export default DevelopmentStage;
