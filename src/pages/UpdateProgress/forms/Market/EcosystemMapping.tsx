import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useEventCallback, useEventListener } from "@/hooks";
import { useProgressForm } from "@/store";

function EcosystemMapping() {
  const field = useProgressForm((state) => state.ecosystem);
  const setField = useProgressForm((state) => state.setEcosystem);
  const setScore = useEventCallback((value: number) =>
    setField([value, field?.[1] ?? ""])
  );
  const setFeedback = useEventCallback((value: string) =>
    setField([field?.[0] ?? 0, value])
  );
  const setFeedbackEvent = useEventListener(setFeedback);

  return (
    <TableRow>
      <TableCell noWrap>3.1. Mapeamento do ecossistema</TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar se a equipe conhece profundamente o seu ecossistema de
          atuação e os principais atores que podem oferecer suporte do
          desenvolvimento do negócio. Esses atores podem incluir, mas não se
          limitar a: investidores, programas de fomento à inovação, NITs,
          incubadoras e aceleradoras, empresas e startups parceiras e empresas
          de crowdfunding.
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Quais são os principais atores do ecossistema que podem ajudar no
          desenvolvimento do seu negócio?
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

export default EcosystemMapping;
