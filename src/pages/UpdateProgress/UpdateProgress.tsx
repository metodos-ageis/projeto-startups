import { StartingPoint } from "./forms/StartingPoint";

import { Waves } from "@/components/atoms";
import { StartupHeader } from "@/components/organisms";

function UpdateProgress() {
  return (
    <>
      <StartupHeader />
      <div className="mx-8 mt-12 relative z-10">
        <StartingPoint />
      </div>
      <Waves size="md" />
    </>
  );
}

export default UpdateProgress;
