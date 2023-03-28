import Challenges from "./Challenges";
import Goals from "./Goals";
import Reason from "./Reason";
import Time from "./Time";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Text,
} from "@/components/atoms";

function StartingPoint() {
  return (
    <>
      <Text variant="h5" className="font-medium">
        Ponto de partida
      </Text>
      <TableContainer elevation={2} className="my-4" bordered>
        <Table className="w-full">
          <TableHead>
            <TableRow>
              <TableCell>Critério</TableCell>
              <TableCell>Objetivo</TableCell>
              <TableCell>Pergunta De Diagnóstico</TableCell>
              <TableCell>Resposta Aberta</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Time />
            <Reason />
            <Goals />
            <Challenges />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default StartingPoint;
