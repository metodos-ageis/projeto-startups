import Canvas from "./Canvas";
import Ip from "./IP";
import Pitch from "./Pitch";

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
              <TableCell>Nota</TableCell>
              <TableCell>Feedback</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Canvas />
            <Pitch />
            <Ip />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Structure;
