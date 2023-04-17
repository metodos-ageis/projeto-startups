import { useEffect, useState } from "react";

import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useFormState } from "@/hooks";
import { useProgressForm } from "@/store";

function FeedbackCycles() {
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useFormState("");

  const { setFeedbackCycle } = useProgressForm();

  useEffect(() => {
    setFeedbackCycle([score, feedback]);
  }, [score, feedback]);

  return (
    <TableRow>
      <TableCell noWrap>3.8. Ciclos de Feedback</TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar o número de ciclos de feedback realizados pela equipe.
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Quantas vezes você já rodou ciclos de feedback (construir, medir,
          aprender)?
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

export default FeedbackCycles;
