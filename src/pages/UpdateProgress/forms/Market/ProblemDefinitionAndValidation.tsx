import { useEffect, useState } from "react";

import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useFormState } from "@/hooks";
import { useProgressForm } from "@/store";

function ProblemDefinitionAndValidation() {
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useFormState("");

  const { setDefinitionValidation } = useProgressForm();

  useEffect(() => {
    setDefinitionValidation([score, feedback]);
  }, [score, feedback]);

  return (
    <TableRow>
      <TableCell noWrap>3.2. Definição e validação do Problema</TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar se o problema que se propõe a solucionar está bem definido e
          delimitado e se foi realizada a sua validação junto aos potenciais
          clientes da solução.
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Qual problema o seu negócio resolve? Você já conversou com seus
          potenciais clientes para entender melhor as suas dores/necessidades?
          Se sim, como foi esse processo?
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

export default ProblemDefinitionAndValidation;
