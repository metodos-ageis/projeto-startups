import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";

function Pitch() {
  return (
    <TableRow>
      <TableCell noWrap>1.1. Pitch</TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar se a equipe possui uma apresentação de pitch já validada e
          bem estruturada para as suas necessidades.
        </Text>
      </TableCell>
      <TableCell></TableCell>
      <TableCellInput placeholder="Digite aqui..." />
      <TableCellInput placeholder="Digite aqui..." />
      <TableCellInput placeholder="Digite aqui..." />
      <TableCellInput placeholder="Digite aqui..." />
      <TableCellInput placeholder="Digite aqui..." />
      <TableCellInput placeholder="Digite aqui..." />
      <TableCellInput placeholder="Digite aqui..." />
    </TableRow>
  );
}

export default Pitch;
