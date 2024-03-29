import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useEventCallback, useEventListener } from "@/hooks";
import { useProgressForm } from "@/store";

function Ip() {
  const field = useProgressForm((state) => state.intelectual_property);
  const setField = useProgressForm((state) => state.setIP);
  const setScore = useEventCallback((value: number) =>
    setField([value, field?.[1] ?? ""])
  );
  const setFeedback = useEventCallback((value: string) =>
    setField([field?.[0] ?? 0, value])
  );
  const setFeedbackEvent = useEventListener(setFeedback);

  return (
    <>
      <TableRow>
        <TableCell noWrap rowSpan={2}>
          1.3. Proteção Intelectual
        </TableCell>
        <TableCell>
          <Text className="text-sm w-96">
            Verificar se a equipe possui conhecimento sobre os tipos de proteção
            intelectual aplicáveis a sua solução e se já deram andamento ao
            processo
          </Text>
        </TableCell>
        <TableCell>
          <Text className="text-sm">
            Vocês já sabem qual é o tipo de propriedade intelectual aplicável ao
            projeto/negócio de vocês? Já definiram a estratégia de proteção com
            a mentoria do INPI?
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
    </>
  );
}

export default Ip;
