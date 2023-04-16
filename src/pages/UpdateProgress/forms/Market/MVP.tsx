import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";

function MVP() {
  return (
    <TableRow>
      <TableCell noWrap>3.7. MVP</TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar se foi realizada a construção do MVP e a sua respectiva
          validação.
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Como você validou as hipóteses do seu modelo de negócio? Foi
          construído um MVP para testar a sua solução? Como foi o processo de
          validação do MVP?
        </Text>
      </TableCell>
      <TableCellInput placeholder="Digite aqui..." />
      <TableCellInput placeholder="Digite aqui..." />
    </TableRow>
  );
}

export default MVP;
