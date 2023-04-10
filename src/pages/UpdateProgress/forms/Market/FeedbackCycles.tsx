import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";

function FeedbackCycles() {
  return (
    <TableRow>
      <TableCell noWrap>3.8. Ciclos de Feedback</TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar o número de ciclos de feedback realizados pela equipe.
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Quantas vezes você já rodou ciclos de feedback (construir, medir,
          aprender)?
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

export default FeedbackCycles;
