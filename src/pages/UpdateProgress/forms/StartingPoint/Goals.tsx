import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";

function Goals() {
  return (
    <TableRow>
      <TableCell noWrap>0.3. Metas e objetivos</TableCell>
      <TableCell className="flex flex-col gap-2">
        <Text className="text-sm">
          Quais as principais metas/objetivos do negócio para os próximos seis
          meses? O que vocês querem atingir nesse período?
        </Text>
      </TableCell>
      <TableCellInput />
    </TableRow>
  );
}

export default Goals;
