import { TableCell, TableCellInput, TableRow, Text } from "@/components/atoms";

function EcosystemMapping() {
  return (
    <TableRow>
      <TableCell noWrap>3.1. Mapeamento do ecossistema</TableCell>
      <TableCell>
        <Text className="text-sm w-96">
          Verificar se a equipe conhece profundamente o seu ecossistema de
          atuação e os principais atores que podem oferecer suporte do
          desenvolvimento do negócio. Esses atores podem incluir, mas não se
          limitar a: investidores, programas de fomento à inovação, NITs,
          incubadoras e aceleradoras, empresas e startups parceiras e empresas
          de crowdfunding.
        </Text>
      </TableCell>
      <TableCell>
        <Text className="text-sm">
          Quais são os principais atores do ecossistema que podem ajudar no
          desenvolvimento do seu negócio?
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

export default EcosystemMapping;
