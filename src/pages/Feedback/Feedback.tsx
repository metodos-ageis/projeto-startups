import moment from "moment";
import "moment/dist/locale/pt-br";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { CompanyMetricsGroup } from "@/models";
import {
  useCurrentCompany,
  useProgress,
  useProgressMetrics,
} from "@/services/company";

interface RowProps {
  children: React.ReactNode;
}

function Row({ children }: RowProps) {
  return (
    <div className="flex items-center gap-2 text-typography-darker even:bg-slate-100 py-2 px-4 rounded hover:bg-slate-200 transition-colors">
      <span>{children}</span>
    </div>
  );
}

interface GroupProps {
  title: string;
  values: string[];
}

function Group({ title, values }: GroupProps) {
  const { t } = useTranslation("dashboard");
  return (
    <div>
      <div className="text-typography-darker font-medium bg-slate-200 rounded px-2 py-1 text-center mb-2">
        {title}
      </div>
      {values.map((item) => (
        <Row key={item}>{t(`Metrics.${item}` as never)}</Row>
      ))}
    </div>
  );
}

interface SectionProps {
  title: string;
  group: CompanyMetricsGroup;
}

function Section({ title, group }: SectionProps) {
  const resume = useMemo(() => {
    const good =
      "Neste quesito a empresa apresentou melhorias consideráveis em relação à sprint anterior";
    const median =
      "Neste quesito a empresa manteve o nível apresentado na sprint anterior";
    const bad =
      "Neste quesito a empresa apresentou uma queda no desempenho esperado";
    const desc = group.overall > 0 ? good : group.overall < 0 ? bad : median;
    return `${desc} (Nota: ${group.overall})`;
  }, []);

  return (
    <div className="bg-slate-50 rounded-lg p-8 pt-4 flex flex-col gap-4">
      <h2 className="text-typography-darker font-bold text-xl text-center">
        {title}
      </h2>

      <div className="text-typography-dark">
        <span className="text-typography-darker font-bold">Resumo</span>{" "}
        <p>{resume}</p>
      </div>

      <div>
        <h2 className="text-typography-darker font-bold mb-2">Indicadores</h2>
        <div className="grid grid-cols-3 gap-4">
          <Group title="Melhoraram" values={group.improved} />
          <Group title="Mantiveram" values={group.remained} />
          <Group title="Pioraram" values={group.worsened} />
        </div>
      </div>
    </div>
  );
}

function Feedback() {
  const { company_id, feedback_id } = useParams<{
    company_id: string;
    feedback_id: string;
  }>();
  const { data: company } = useCurrentCompany();
  const { data: progress } = useProgress(company_id ?? "", feedback_id ?? "");
  const { data: metrics } = useProgressMetrics(
    company_id ?? "",
    feedback_id ?? ""
  );

  return (
    <div className="max-w-5xl m-auto p-8">
      <div className="flex items-center justify-between bg-slate-100 px-8 rounded-lg">
        <div>
          <h1 className="text-typography-darker text-xl font-bold">
            Resumo da Sprint - Startup: {company?.title}
          </h1>
          <p>
            {progress &&
              moment(progress.created_at).locale("pt-br").format("LLLL")}
          </p>
        </div>
        <img src="/assets/logo.png" className="w-44 my-8" />
      </div>
      {metrics && (
        <div className="flex flex-col gap-4 mt-4 mb-8">
          <Section title="Estrutura" group={metrics.structure} />
          <Section title="Solução" group={metrics.solution} />
          <Section title="Mercado" group={metrics.market} />
        </div>
      )}
    </div>
  );
}

export default Feedback;
