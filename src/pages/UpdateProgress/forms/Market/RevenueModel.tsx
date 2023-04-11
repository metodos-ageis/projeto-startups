import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";

function RevenueModel() {
  return (
    <TableRow>
      <TableCell noWrap>3.6. Modelo de receita</TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar se a equipe definiu um modelo de receita a partir da
          valiação com potenciais clientes.
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Qual o modelo de receita e como ele foi definido?
        </Text>
      </TableCell>
      <TableCellInput placeholder="Digite aqui..." />
      <TableCellInput placeholder="Digite aqui..." />
      <TableCellInput placeholder="Digite aqui..." />
      <TableCellInput placeholder="Digite aqui..." />
      <TableCellInput placeholder="Digite aqui..." />
      <TableCellInput placeholder="Digite aqui..." />
    </TableRow>
  );
}

export default RevenueModel;
