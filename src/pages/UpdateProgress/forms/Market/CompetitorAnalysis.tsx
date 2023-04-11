import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";

function CompetitorAnalysis() {
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
      <TableCellInput placeholder="Enter competitor name" />
      <TableCellInput placeholder="Enter competitor name" />
      <TableCellInput placeholder="Enter competitor name" />
      <TableCellInput placeholder="Enter competitor name" />
      <TableCellInput placeholder="Enter competitor name" />
      <TableCellInput placeholder="Enter competitor name" />
    </TableRow>
  );
}

export default CompetitorAnalysis;
