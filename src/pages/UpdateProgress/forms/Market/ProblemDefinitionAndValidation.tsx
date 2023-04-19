import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useEventCallback, useEventListener } from "@/hooks";
import { useProgressForm } from "@/store";

function ProblemDefinitionAndValidation() {
  const field = useProgressForm((state) => state.definition_validation);
  const setField = useProgressForm((state) => state.setDefinitionValidation);
  const setScore = useEventCallback((value: number) =>
    setField([value, field?.[1] ?? ""])
  );
  const setFeedback = useEventCallback((value: string) =>
    setField([field?.[0] ?? 0, value])
  );
  const setFeedbackEvent = useEventListener(setFeedback);

  return (
    <TableRow>
      <TableCell noWrap>3.2. Definição e validação do Problema</TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar se o problema que se propõe a solucionar está bem definido e
          delimitado e se foi realizada a sua validação junto aos potenciais
          clientes da solução.
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Qual problema o seu negócio resolve? Você já conversou com seus
          potenciais clientes para entender melhor as suas dores/necessidades?
          Se sim, como foi esse processo?
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

export default ProblemDefinitionAndValidation;
