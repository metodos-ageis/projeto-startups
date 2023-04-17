import { Market, Solution, StartingPoint, Structure } from "./forms";

import { withCredentials } from "@/components/hoc";
import { StartupHeader } from "@/components/organisms";

function UpdateProgress() {
  return (
    <>
      <StartupHeader />
      <div className="mx-8 mt-12 relative z-10">
        <StartingPoint />
        <Structure />
        <Solution />
        <Market />
      </div>
    </>
  );
}

export default withCredentials(UpdateProgress);
