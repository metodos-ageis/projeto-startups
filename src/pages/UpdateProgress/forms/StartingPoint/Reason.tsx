import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";

function Reason() {
  return (
    <TableRow>
      <TableCell noWrap>0.2 Propósito</TableCell>
      <TableCell className="flex flex-col gap-2">
        <Text className="text-sm">O que os motivou a criar esse projeto?</Text>
        <Text className="text-sm text-typography">
          Caso a equipe tenha dificuldade em responder essa pergunta, você pode
          explorar as opções abaixo, para verificar se fizeram alguma dessas
          ações:
        </Text>
        <ol className="list-decimal ml-4">
          <li className="text-typography">Tinham vontade de empreender;</li>
          <li className="text-typography">
            Identificaram um gap/oportunidade no mercado;
          </li>
          <li className="text-typography">
            Um dos fundadores já passou pelo problema e conhece a dor.
          </li>
        </ol>
      </TableCell>
      <TableCellInput placeholder="Digite aqui..." />
    </TableRow>
  );
}

export default Reason;
