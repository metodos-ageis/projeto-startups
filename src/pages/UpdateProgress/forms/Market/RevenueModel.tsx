import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useEventCallback, useEventListener } from "@/hooks";
import { useProgressForm } from "@/store";

function RevenueModel() {
  const field = useProgressForm((state) => state.incoming_method);
  const setField = useProgressForm((state) => state.setIncomingMethod);
  const setScore = useEventCallback((value: number) =>
    setField([value, field?.[1] ?? ""])
  );
  const setFeedback = useEventCallback((value: string) =>
    setField([field?.[0] ?? 0, value])
  );
  const setFeedbackEvent = useEventListener(setFeedback);

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

export default RevenueModel;
