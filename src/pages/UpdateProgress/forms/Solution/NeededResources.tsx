import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useEventCallback, useEventListener } from "@/hooks";
import { useProgressForm } from "@/store";

function NeededResources() {
  const field = useProgressForm((state) => state.needed_resources);
  const setField = useProgressForm((state) => state.setNeededResources);
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
        2.3. Recursos necessários para o desenvolvimento da solução
      </TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar se a equipe possui os recursos necessários para o
          desenvolvimento da solução (equipe técnica, rede de fornecedores,
          parceiros estratégicos, ...)
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Quais são os recursos e competências necessários para o
          desenvolvimento da solução? (Lembre de abordar os recursos humanos,
          físicos e intagíveis: insumos, competências da equipe ou parceiros que
          atuam no desenvolvimento, fornecedores, equipamentos, instalações,
          ...)
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

export default NeededResources;
