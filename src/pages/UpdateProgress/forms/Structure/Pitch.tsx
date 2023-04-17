import { useEffect, useState } from "react";

import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useFormState } from "@/hooks";
import { useProgressForm } from "@/store";

function Pitch() {
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useFormState("");

  const { setPitch } = useProgressForm();

  useEffect(() => {
    setPitch([score, feedback]);
  }, [score, feedback]);

  return (
    <TableRow>
      <TableCell noWrap>1.1. Pitch</TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar se a equipe possui uma apresentação de pitch já validada e
          bem estruturada para as suas necessidades.
        </Text>
      </TableCell>
      <TableCell></TableCell>
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

export default Pitch;
