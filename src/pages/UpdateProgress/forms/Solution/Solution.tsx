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
              <TableCell>Nota</TableCell>
              <TableCell>Feedback</TableCell>
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
