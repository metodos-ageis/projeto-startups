import { twMerge } from "tailwind-merge";

import { Text } from "../atoms";

function StartupBadge() {
  // TODO: Load startup data
  return (
    <div
      className={twMerge(
        "grid gap-4 grid-cols-[auto_1fr] min-w-[32rem]",
        "bg-slate-200 p-4 rounded-xl"
      )}
    >
      <div className="bg-gray-500 w-11 h-11" />
      <div className="w-full">
        <div className="flex justify-between">
          <Text
            variant="h4"
            uppercase
            className="font-extrabold tracking-widest whitespace-nowrap"
          >
            Startup 1
          </Text>
          <Text
            variant="caption"
            className="whitespace-nowrap flex items-end text-typography font-semibold"
          >
            Processo seletivo
          </Text>
        </div>
        <div className="flex justify-between">
          <Text
            variant="caption"
            className="font-bold tracking-wider whitespace-nowrap text-typography"
          >
            Nivel 2
          </Text>

          <Text
            variant="caption"
            className="font-bold tracking-wider whitespace-nowrap text-typography"
          >
            2022.1
          </Text>
        </div>
      </div>
    </div>
  );
}

export default StartupBadge;
