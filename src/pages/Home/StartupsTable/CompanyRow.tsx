import { useNavigate } from "react-router-dom";

import { TableCell, TableRow } from "@/components/atoms";
import { useEventCallback } from "@/hooks";
import { Company } from "@/models";

interface Props {
  company: Company;
}

function CompanyRow({ company }: Props) {
  const navigate = useNavigate();

  const onClick = useEventCallback(() => {
    navigate(`${company.id}/control-panel`);
  });

  return (
    <TableRow onClick={onClick} className="hover:bg-slate-200 cursor-pointer">
      <TableCell noWrap>{company.title}</TableCell>
      <TableCell>5</TableCell>
      <TableCell>{"-"}</TableCell>
      <TableCell>{company.sector ?? "-"}</TableCell>
    </TableRow>
  );
}

export default CompanyRow;
