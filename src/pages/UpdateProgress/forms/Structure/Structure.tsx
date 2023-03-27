import Canvas from "./Canvas";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Text,
} from "@/components/atoms";

function Structure() {
  return (
    <>
      <Text variant="h5" className="font-medium">
        Estrutura
      </Text>
      <TableContainer elevation={2} className="my-4" bordered>
        <Table className="w-full">
          <TableHead>
            <TableRow>
              <TableCell>Critério</TableCell>
              <TableCell>Objetivo</TableCell>
              <TableCell>Pergunta De Diagnóstico</TableCell>
              <TableCell>Diagnóstico</TableCell>
              <TableCell>Encontro 2</TableCell>
              <TableCell>Encontro 3</TableCell>
              <TableCell>Critérios </TableCell>
              <TableCell>Evidência 1</TableCell>
              <TableCell>Evidência 2</TableCell>
              <TableCell>Evidência 3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <Canvas />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Structure;
