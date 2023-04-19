import { useMemo } from "react";

import Metrics from "./Metrics";

import { Text } from "@/components/atoms";
import { CompanyMetricsGroup } from "@/models";

interface Props {
  title: string;
  group: CompanyMetricsGroup;
}

function MetricsGroup({ title, group }: Props) {
  const metrics = useMemo(() => Object.entries(group.history), [group.history]);
  return (
    <div className="flex flex-col w-full gap-8">
      <Text variant="h4">{title}</Text>
      <div className="grid w-full gap-8 grid-cols-2 auto-rows-[24rem]">
        {metrics.map(([key, value]) => (
          <Metrics key={key} history={value} field={key} />
        ))}
      </div>
    </div>
  );
}

export default MetricsGroup;
