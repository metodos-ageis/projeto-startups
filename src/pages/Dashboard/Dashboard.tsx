import { useParams } from "react-router-dom";

import MetricsGroup from "./MetricsGroup";

import { withCredentials } from "@/components/hoc";
import { StartupHeader } from "@/components/organisms";
import { useCompanyMetrics } from "@/services/company";

function Dashboard() {
  const { company_id } = useParams<{ company_id: string }>();
  const { data: metrics } = useCompanyMetrics(company_id ?? "");

  return (
    <div>
      <StartupHeader />
      <div className="flex items-center justify-center flex-col h-full max-w-[60rem] m-auto mt-8 gap-8">
        {metrics && (
          <>
            <MetricsGroup title="Estrutura" group={metrics?.structure} />
            <MetricsGroup title="Solução" group={metrics?.solution} />
            <MetricsGroup title="Mercado" group={metrics?.market} />
          </>
        )}
      </div>
    </div>
  );
}

export default withCredentials(Dashboard);
