import { useEffect, useState } from "react";

import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useFormState } from "@/hooks";
import { useProgressForm } from "@/store";

function MVP() {
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useFormState("");

  const { setMvp } = useProgressForm();

  useEffect(() => {
    setMvp([score, feedback]);
  }, [score, feedback]);

  return (
    <TableRow>
      <TableCell noWrap>3.7. MVP</TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar se foi realizada a construção do MVP e a sua respectiva
          validação.
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Como você validou as hipóteses do seu modelo de negócio? Foi
          construído um MVP para testar a sua solução? Como foi o processo de
          validação do MVP?
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

export default MVP;
