import DevelopmentStage from "./DevelopmentStage";
import NeededResources from "./NeededResources";
import ValueDefinition from "./ValueDefinition";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Text,
} from "@/components/atoms";

function Solution() {
  return (
    <>
      <Text variant="h5" className="font-medium">
        Solução
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
            <DevelopmentStage />
            <ValueDefinition />
            <NeededResources />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Solution;
