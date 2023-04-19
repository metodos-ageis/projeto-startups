import { ResponsiveLine } from "@nivo/line";
import moment from "moment";
import { PropsWithChildren } from "react";
import { useParams } from "react-router-dom";

import data from "./temp.json";

import { Text } from "@/components/atoms";
import { withCredentials } from "@/components/hoc";
import { StartupHeader } from "@/components/organisms";
import { useCompanyMetrics } from "@/services/company";

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

function Dashboard() {
  const { company_id } = useParams<{ company_id: string }>();
  const query = useCompanyMetrics(company_id ?? "");

  return (
    <div>
      <StartupHeader />
      <div className="flex items-center justify-center flex-col h-full max-w-[60rem] m-auto mt-8">
        <div className="grid w-full gap-8 grid-cols-2 auto-rows-[24rem]">
          <ChartContainer title="Documentação">
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
                format: (x: string) => moment(x, "DD-MM-YYYY").format("MMM"),
              }}
              axisLeft={{
                tickValues: [0, 25, 50, 75, 100],
              }}
              legends={[
                {
                  anchor: "top-left",
                  direction: "column",
                  itemWidth: 80,
                  itemHeight: 20,
                  translateY: -50,
                  translateX: -5,
                  symbolSize: 8,
                  symbolShape: "circle",
                },
              ]}
              enableArea
              areaOpacity={0.8}
              layers={[
                "grid",
                "markers",
                "axes",
                // "areas",
                "crosshair",
                "lines",
                "points",
                "slices",
                "mesh",
                "legends",
              ]}
              yScale={{
                type: "linear",
                min: 0,
                max: 100,
              }}
              theme={{
                legends: {
                  text: {
                    fontSize: 10,
                  },
                },
              }}
            />
          </ChartContainer>

          <ChartContainer title="Faturamento">
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
                format: (x: string) => moment(x, "DD-MM-YYYY").format("MMM"),
              }}
              axisLeft={{
                tickValues: [0, 25, 50, 75, 100],
              }}
              legends={[
                {
                  anchor: "top-left",
                  direction: "column",
                  itemWidth: 80,
                  itemHeight: 20,
                  translateY: -50,
                  translateX: -5,
                  symbolSize: 8,
                  symbolShape: "circle",
                },
              ]}
              enableArea
              areaOpacity={0.8}
              layers={[
                "grid",
                "markers",
                "axes",
                "areas",
                "crosshair",
                // 'lines',
                // 'points',
                "slices",
                "mesh",
                "legends",
              ]}
              yScale={{
                type: "linear",
                min: 0,
                max: 100,
              }}
              theme={{
                legends: {
                  text: {
                    fontSize: 10,
                  },
                },
              }}
            />
          </ChartContainer>

          <ChartContainer title="Validação da ideia">
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
                format: (x: string) => moment(x, "DD-MM-YYYY").format("MMM"),
              }}
              axisLeft={{
                tickValues: [0, 25, 50, 75, 100],
              }}
              legends={[
                {
                  anchor: "top-left",
                  direction: "column",
                  itemWidth: 80,
                  itemHeight: 20,
                  translateY: -50,
                  translateX: -5,
                  symbolSize: 8,
                  symbolShape: "circle",
                },
              ]}
              enableArea
              areaOpacity={0.8}
              layers={[
                "grid",
                "markers",
                "axes",
                // "areas",
                "crosshair",
                "lines",
                "points",
                "slices",
                "mesh",
                "legends",
              ]}
              yScale={{
                type: "linear",
                min: 0,
                max: 100,
              }}
              theme={{
                legends: {
                  text: {
                    fontSize: 10,
                  },
                },
              }}
            />
          </ChartContainer>

          <ChartContainer title="Regra de negócio">
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
                format: (x: string) => moment(x, "DD-MM-YYYY").format("MMM"),
              }}
              axisLeft={{
                tickValues: [0, 25, 50, 75, 100],
              }}
              legends={[
                {
                  anchor: "top-left",
                  direction: "column",
                  itemWidth: 80,
                  itemHeight: 20,
                  translateY: -50,
                  translateX: -5,
                  symbolSize: 8,
                  symbolShape: "circle",
                },
              ]}
              enableArea
              areaOpacity={0.8}
              layers={[
                "grid",
                "markers",
                "axes",
                "areas",
                "crosshair",
                // 'lines',
                // 'points',
                "slices",
                "mesh",
                "legends",
              ]}
              yScale={{
                type: "linear",
                min: 0,
                max: 100,
              }}
              theme={{
                legends: {
                  text: {
                    fontSize: 10,
                  },
                },
              }}
            />
          </ChartContainer>
          {/* <Text>WIP</Text>
        <Button href={Routes.UPDATE_PROGRESS}>Atualizar Progresso</Button> */}
        </div>
      </div>
    </div>
  );
}

export default withCredentials(Dashboard);
