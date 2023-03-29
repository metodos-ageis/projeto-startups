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

function StartupsTable() {
  return (
    <>
      <Text variant="h5" className="font-medium">
        Startups
      </Text>
      <TableContainer elevation={2} className="my-4" bordered>
        <Table className="w-full">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Nível de maturidade</TableCell>
              <TableCell>Sprint</TableCell>
              <TableCell>Setor</TableCell>
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

export default StartupsTable;
