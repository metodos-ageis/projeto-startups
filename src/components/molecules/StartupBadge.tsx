import { twMerge } from "tailwind-merge";

import { Text } from "../atoms";

function StartupBadge() {
  // TODO: Load startup data
  return (
    <div
      className={twMerge(
        "grid gap-4 grid-cols-[auto_1fr] min-w-[32rem]",
        "bg-slate-200 py-2 px-6 rounded-xl"
      )}
    >
      <img src="assets/tmp/startup.svg" className="w-11 h-11" />
      <div className="w-full flex justify-between items-center">
        <div>
          <Text
            variant="h4"
            uppercase
            className="font-extrabold tracking-widest whitespace-nowrap"
          >
            Startup 1
          </Text>
          <Text
            variant="caption"
            className="font-bold tracking-wider whitespace-nowrap text-typography"
          >
            Nivel 2
          </Text>
        </div>
        <div>
          <Text
            variant="caption"
            className="whitespace-nowrap flex items-end text-typography font-semibold"
          >
            Processo seletivo
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
