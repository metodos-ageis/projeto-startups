import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useEventCallback, useEventListener } from "@/hooks";
import { useProgressForm } from "@/store";

function Canvas() {
  const field = useProgressForm((state) => state.canvas);
  const setField = useProgressForm((state) => state.setCanvas);
  const setScore = useEventCallback((value: number) =>
    setField([value, field?.[1] ?? ""])
  );
  const setFeedback = useEventCallback((value: string) =>
    setField([field?.[0] ?? 0, value])
  );
  const setFeedbackEvent = useEventListener(setFeedback);

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

export default Canvas;
