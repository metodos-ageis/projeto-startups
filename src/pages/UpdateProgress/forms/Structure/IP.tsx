import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";

function Ip() {
  return (
    <>
      <TableRow>
        <TableCell noWrap rowSpan={2}>
          1.3. Proteção Intelectual
        </TableCell>
        <TableCell>
          <Text className="text-sm w-96">
            Verificar se a equipe possui conhecimento sobre os tipos de proteção
            intelectual aplicáveis a sua solução e se já deram andamento ao
            processo
          </Text>
        </TableCell>
        <TableCell>
          <Text className="text-sm">
            Vocês já sabem qual é o tipo de propriedade intelectual aplicável ao
            projeto/negócio de vocês? Já definiram a estratégia de proteção com
            a mentoria do INPI?
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
      <TableRow>
        <TableCell>
          <Text className="text-sm w-96">
            Verificar os tipos de registros realizados junto ao INPI
          </Text>
        </TableCell>
        <TableCell>
          <Text className="text-sm">Quais registros foram solicitados?</Text>
        </TableCell>
        <TableCellInput placeholder="Digite aqui..." />
        <TableCellInput placeholder="Digite aqui..." />
        <TableCellInput placeholder="Digite aqui..." />
        <TableCellInput placeholder="Digite aqui..." />
        <TableCellInput placeholder="Digite aqui..." />
        <TableCellInput placeholder="Digite aqui..." />
        <TableCellInput placeholder="Digite aqui..." />
      </TableRow>
    </>
  );
}

export default Ip;
