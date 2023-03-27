import { TableCell, TableRow, TableCellInput } from "@/components/atoms";
function Time() {
  return (
    <TableRow>
      <TableCell noWrap>0.1 Tempo</TableCell>
      <TableCell rowSpan={4}>
        Compreender a visão dos empeendedores sobre as motivações e desafios
        para a criação do negócio/solução.
      </TableCell>
      <TableCell>
        Há quanto tempo vocês estão desenvolvendo esse projeto?
      </TableCell>
      <TableCellInput placeholder="Digite aqui..." />
    </TableRow>
  );
}

export default Time;
