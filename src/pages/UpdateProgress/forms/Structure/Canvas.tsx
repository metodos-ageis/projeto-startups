import { useEffect, useState } from "react";

import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useFormState } from "@/hooks";
import { useProgressForm } from "@/store";

function Canvas() {
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useFormState("");

  const { setCanvas } = useProgressForm();

  useEffect(() => {
    setCanvas([score, feedback]);
  }, [score, feedback]);

  return (
    <TableRow>
      <TableCell noWrap>1.1. Canvas</TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar se foi realizada a estruturação das hipóteses do modelo de
          negócios, por meio do Science Business Model, e se as mesmas foram
          validadas junto aos potenciais clientes da solução.
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Vocês já estruturam o Canvas com as hipóteses do negócio? Elas já
          foram validadas?
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

export default Canvas;
