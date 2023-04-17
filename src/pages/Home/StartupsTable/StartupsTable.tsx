import CompanyRow from "./CompanyRow";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Text,
} from "@/components/atoms";
import { useCompanies } from "@/services/company";

function StartupsTable() {
  const { data: companies } = useCompanies();

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
            {companies?.map((company) => (
              <CompanyRow key={company.id} company={company} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default StartupsTable;
