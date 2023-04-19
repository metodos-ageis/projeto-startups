import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useEventCallback, useEventListener } from "@/hooks";
import { useProgressForm } from "@/store";

function MarketDynamics() {
  const field = useProgressForm((state) => state.market_size);
  const setField = useProgressForm((state) => state.setMarketSize);
  const setScore = useEventCallback((value: number) =>
    setField([value, field?.[1] ?? ""])
  );
  const setFeedback = useEventCallback((value: string) =>
    setField([field?.[0] ?? 0, value])
  );
  const setFeedbackEvent = useEventListener(setFeedback);

  return (
    <TableRow>
      <TableCell noWrap>3.5. Dinâmica do setor e Tamanho de mercado</TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar se os empreendedores conhecem bem a dinâmica do seu setor de
          atuação e se realizaram o calculo do seu tamanho de mercado
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Como é o seu setor de atuação e qual é o tamanho do mercado?
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

export default MarketDynamics;
