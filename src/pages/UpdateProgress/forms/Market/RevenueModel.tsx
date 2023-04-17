import { useEffect, useState } from "react";

import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useFormState } from "@/hooks";
import { useProgressForm } from "@/store";

function RevenueModel() {
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useFormState("");

  const { setIncomingMethod } = useProgressForm();

  useEffect(() => {
    setIncomingMethod([score, feedback]);
  }, [score, feedback]);

  return (
    <TableRow>
      <TableCell noWrap>3.6. Modelo de receita</TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar se a equipe definiu um modelo de receita a partir da
          valiação com potenciais clientes.
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Qual o modelo de receita e como ele foi definido?
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

export default RevenueModel;
