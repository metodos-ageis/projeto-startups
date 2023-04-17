import { useEffect, useState } from "react";

import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useFormState } from "@/hooks";
import { useProgressForm } from "@/store";

function ValueDefinition() {
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useFormState("");

  const { setSolutionDefinition } = useProgressForm();

  useEffect(() => {
    setSolutionDefinition([score, feedback]);
  }, [score, feedback]);

  return (
    <TableRow>
      <TableCell noWrap>
        2.2. Definição da solução e proposta de valor
      </TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar se a solução e a proposta de valor foram definidas e
          validadas e se respondem ao problema identificado junto aos potenciais
          clientes.
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Quais os benefícios oferecidos pela sua solução (proposta de valor)?
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

export default ValueDefinition;
