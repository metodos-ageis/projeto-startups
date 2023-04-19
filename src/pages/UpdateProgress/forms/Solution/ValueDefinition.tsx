import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useEventCallback, useEventListener } from "@/hooks";
import { useProgressForm } from "@/store";

function ValueDefinition() {
  const field = useProgressForm((state) => state.solution_definition);
  const setField = useProgressForm((state) => state.setSolutionDefinition);
  const setScore = useEventCallback((value: number) =>
    setField([value, field?.[1] ?? ""])
  );
  const setFeedback = useEventCallback((value: string) =>
    setField([field?.[0] ?? 0, value])
  );
  const setFeedbackEvent = useEventListener(setFeedback);

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

export default ValueDefinition;
