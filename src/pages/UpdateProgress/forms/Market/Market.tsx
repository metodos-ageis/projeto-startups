import CompetitorAnalysis from "./CompetitorAnalysis";
import Customers from "./Customers";
import EcosystemMapping from "./EcosystemMapping";
import FeedbackCycles from "./FeedbackCycles";
import MarketDynamics from "./MarketDynamics";
import MVP from "./MVP";
import ProblemDefinitionAndValidation from "./ProblemDefinitionAndValidation";
import RevenueModel from "./RevenueModel";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Text,
} from "@/components/atoms";

function Market() {
  return (
    <>
      <Text variant="h5" className="font-medium">
        Mercado
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
            <EcosystemMapping />
            <ProblemDefinitionAndValidation />
            <Customers />
            <CompetitorAnalysis />
            <MarketDynamics />
            <RevenueModel />
            <MVP />
            <FeedbackCycles />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Market;
