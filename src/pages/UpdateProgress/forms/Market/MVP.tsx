import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useEventCallback, useEventListener } from "@/hooks";
import { useProgressForm } from "@/store";

function MVP() {
  const field = useProgressForm((state) => state.mvp);
  const setField = useProgressForm((state) => state.setMvp);
  const setScore = useEventCallback((value: number) =>
    setField([value, field?.[1] ?? ""])
  );
  const setFeedback = useEventCallback((value: string) =>
    setField([field?.[0] ?? 0, value])
  );
  const setFeedbackEvent = useEventListener(setFeedback);

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

export default MVP;
