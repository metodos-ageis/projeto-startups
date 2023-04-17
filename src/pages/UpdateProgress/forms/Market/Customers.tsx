import { useEffect, useState } from "react";

import { scoreItems } from "../common";

import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";
import { TableCellSelector } from "@/components/atoms/table";
import { useFormState } from "@/hooks";
import { useProgressForm } from "@/store";

function Customers() {
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useFormState("");

  const { setClients } = useProgressForm();

  useEffect(() => {
    setClients([score, feedback]);
  }, [score, feedback]);

  return (
    <TableRow>
      <TableCell noWrap>3.3. Clientes</TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar se a equipe sabe quem são os potenciais clientes da sua
          solução e se já fizeram uma pesquisa com eles para entender melhor o
          seu perfil. Quem são os clientes do seu negócio? E o que você sabe
          sobre eles? (Lembre de abordar os diferentes tipos de clientes:
          Pagante: aquele que paga para utilizar a solução; Usuário: aquele que
          consome a solução e se beneficia com o seu uso; Influenciador: aquele
          que estimula um dos dois segmentos anteriores a utilizar a solução.)
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Quem são os seus clientes e o que você sabe sobre eles?
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

export default Customers;
