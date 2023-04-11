import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";

function DevelopmentStage() {
  return (
    <TableRow>
      <TableCell noWrap>2.1. Estágio de desenvolvimento</TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar e acompanhar o estágio de desenvolvimento da tecnologia. A
          escala proposta vem da metodologia TRL (Technology Readiness Levels).
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Qual é o estágio de desenvolvimento da sua solução?
        </Text>
      </TableCell>
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

export default DevelopmentStage;
