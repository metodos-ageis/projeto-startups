import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useEventCallback, useEventListener } from "@/hooks";
import { useProgressForm } from "@/store";

function CompetitorAnalysis() {
  const field = useProgressForm((state) => state.concurrency_analysis);
  const setField = useProgressForm((state) => state.setConcurrencyAnalysis);
  const setScore = useEventCallback((value: number) =>
    setField([value, field?.[1] ?? ""])
  );
  const setFeedback = useEventCallback((value: string) =>
    setField([field?.[0] ?? 0, value])
  );
  const setFeedbackEvent = useEventListener(setFeedback);

  return (
    <TableRow>
      <TableCell noWrap>3.4. Análise de Concorrentes</TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar se a equipe conhece os concorrentes diretos e indiretos da
          sua solução e se sabe quais são os seus principais diferenciais.
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Você sabe quem são os seus concorrentes? Se sim, o que você sabe sobre
          eles? (lembre de verificar se a equipe conhece bem os seus
          concorrentes diretos e indiretos e se está claro quais são os seus
          diferenciais)
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

export default CompetitorAnalysis;
