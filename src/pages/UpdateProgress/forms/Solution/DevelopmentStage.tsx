import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useEventCallback, useEventListener } from "@/hooks";
import { useProgressForm } from "@/store";

function DevelopmentStage() {
  const field = useProgressForm((state) => state.development_state);
  const setField = useProgressForm((state) => state.setDevelopmentState);
  const setScore = useEventCallback((value: number) =>
    setField([value, field?.[1] ?? ""])
  );
  const setFeedback = useEventCallback((value: string) =>
    setField([field?.[0] ?? 0, value])
  );
  const setFeedbackEvent = useEventListener(setFeedback);

  return (
    <TableRow>
      <TableCell noWrap>2.1. Estágio de desenvolvimento</TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar e acompanhar o estágio de desenvolvimento da tecnologia. A
          escala proposta vem da metodologia TRL (Technology Readiness Levels).
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Qual é o estágio de desenvolvimento da sua solução?
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

export default DevelopmentStage;
