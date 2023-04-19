import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useEventCallback, useEventListener } from "@/hooks";
import { useProgressForm } from "@/store";

function FeedbackCycles() {
  const field = useProgressForm((state) => state.feedback_cycle);
  const setField = useProgressForm((state) => state.setFeedbackCycle);
  const setScore = useEventCallback((value: number) =>
    setField([value, field?.[1] ?? ""])
  );
  const setFeedback = useEventCallback((value: string) =>
    setField([field?.[0] ?? 0, value])
  );
  const setFeedbackEvent = useEventListener(setFeedback);

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
        value={field?.[0] ?? 0}
        onChange={setScore}
      />
      <TableCellInput
        placeholder="Digite aqui..."
        value={field?.[1] ?? 0}
        onChange={setFeedbackEvent}
      />
    </TableRow>
  );
}

export default FeedbackCycles;
