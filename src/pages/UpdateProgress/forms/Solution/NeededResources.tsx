import { useEffect, useState } from "react";

import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useFormState } from "@/hooks";
import { useProgressForm } from "@/store";

function NeededResources() {
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useFormState("");

  const { setNeededResources } = useProgressForm();

  useEffect(() => {
    setNeededResources([score, feedback]);
  }, [score, feedback]);

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

export default NeededResources;
