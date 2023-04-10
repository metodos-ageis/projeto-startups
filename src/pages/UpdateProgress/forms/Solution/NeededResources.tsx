import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";

function NeededResources() {
  return (
    <TableRow>
      <TableCell noWrap>
        2.3. Recursos necessários para o desenvolvimento da solução
      </TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar se a equipe possui os recursos necessários para o
          desenvolvimento da solução (equipe técnica, rede de fornecedores,
          parceiros estratégicos, ...)
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Quais são os recursos e competências necessários para o
          desenvolvimento da solução? (Lembre de abordar os recursos humanos,
          físicos e intagíveis: insumos, competências da equipe ou parceiros que
          atuam no desenvolvimento, fornecedores, equipamentos, instalações,
          ...)
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

export default NeededResources;
