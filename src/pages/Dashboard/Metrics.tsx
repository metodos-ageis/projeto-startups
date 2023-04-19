import { ResponsiveLine } from "@nivo/line";
import moment from "moment";
import { PropsWithChildren, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { Text } from "@/components/atoms";
import { FieldHistory } from "@/models";

interface Props {
  field: string;
  history: FieldHistory[];
}

function format(x: string) {
  return moment(x, "DD-MM-YYYY").format("MMM");
}

function ChartContainer({
  title,
  children,
}: PropsWithChildren<{ title: string }>) {
  return (
    <div className="bg-slate-100 p-4 rounded-md">
      <Text className="h-2rem">{title}</Text>
      <div className="h-[22rem]">{children}</div>
    </div>
  );
}

function Metrics({ field, history }: Props) {
  const { t } = useTranslation("dashboard");

  const data = useMemo(
    () => [
      {
        id: t(`Metrics.${field}` as never),
        color: "#17A5A5",
        data: history.map((row) => ({
          x: moment(row.date).toDate(),
          y: row.value,
        })),
      },
    ],
    [field, history]
  );

  const [min, max] = useMemo(() => {
    const dates = history.map((p) => moment(p.date));
    return [moment.min(dates).toDate(), moment.max(dates).toDate()];
  }, [history]);

  return (
    <ChartContainer title={t(`Metrics.${field}` as never)}>
      <ResponsiveLine
        data={data}
        colors={["#17A5A5", "#5270FF"]}
        margin={{
          bottom: 50,
          left: 40,
          top: 50,
          right: 20,
        }}
        axisBottom={{
          tickRotation: -45,
          format,
        }}
        xScale={{ type: "time", format: "native", min, max }}
        axisLeft={{ tickValues: [0, 1, 2, 3, 4, 5] }}
        areaOpacity={0.8}
        yScale={{ type: "linear", min: 0, max: 5 }}
        theme={{ legends: { text: { fontSize: 10 } } }}
        enableArea
      />
    </ChartContainer>
  );
}

export default Metrics;
