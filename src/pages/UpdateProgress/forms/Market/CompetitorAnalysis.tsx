import { useEffect, useState } from "react";

import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useFormState } from "@/hooks";
import { useProgressForm } from "@/store";

function CompetitorAnalysis() {
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useFormState("");

  const { setConcurrencyAnalysis } = useProgressForm();

  useEffect(() => {
    setConcurrencyAnalysis([score, feedback]);
  }, [score, feedback]);

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
        onChange={setScore}
      />
      <TableCellInput
        placeholder="Digite aqui..."
        value={feedback}
        onChange={setFeedback}
      />
    </TableRow>
  );
}

export default CompetitorAnalysis;
