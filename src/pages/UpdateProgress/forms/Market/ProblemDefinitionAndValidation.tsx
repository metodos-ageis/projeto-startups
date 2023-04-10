import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";

function ProblemDefinitionAndValidation() {
  return (
    <TableRow>
      <TableCell noWrap>3.2. Definição e validação do Problema</TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar se o problema que se propõe a solucionar está bem definido e
          delimitado e se foi realizada a sua validação junto aos potenciais
          clientes da solução.
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Qual problema o seu negócio resolve? Você já conversou com seus
          potenciais clientes para entender melhor as suas dores/necessidades?
          Se sim, como foi esse processo?
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

export default ProblemDefinitionAndValidation;
