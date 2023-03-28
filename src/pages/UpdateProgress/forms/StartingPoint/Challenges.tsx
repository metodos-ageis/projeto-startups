import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";

function Challenges() {
  return (
    <TableRow>
      <TableCell noWrap>0.4. Desafios</TableCell>
      <TableCell className="flex flex-col gap-2">
        <Text className="text-sm">
          Quais são os principais desafios/dificuldades que você enxerga que o
          seu projeto vivencia atualmente?
        </Text>
      </TableCell>
      <TableCellInput />
    </TableRow>
  );
}

export default Challenges;
