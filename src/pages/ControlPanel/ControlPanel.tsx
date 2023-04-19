import ControlPanelButtons from "./ControlPanelButtons";

import { Waves } from "@/components/atoms";
import { withCredentials } from "@/components/hoc";
import { StartupHeader } from "@/components/organisms";

function ControlPanel() {
  return (
    <div>
      <StartupHeader />
      <div className="mt-24">
        <ControlPanelButtons />
      </div>
      <Waves size="md" />
    </div>
  );
}

export default withCredentials(ControlPanel);
