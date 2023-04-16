import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";

function MarketDynamics() {
  return (
    <TableRow>
      <TableCell noWrap>3.5. Dinâmica do setor e Tamanho de mercado</TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar se os empreendedores conhecem bem a dinâmica do seu setor de
          atuação e se realizaram o calculo do seu tamanho de mercado
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Como é o seu setor de atuação e qual é o tamanho do mercado?
        </Text>
      </TableCell>
      <TableCellInput placeholder="Enter your answer here..." />
      <TableCellInput placeholder="Enter your answer here..." />
    </TableRow>
  );
}

export default MarketDynamics;
