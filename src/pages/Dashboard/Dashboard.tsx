import { Button, Text } from "@/components/atoms";
import { Routes } from "@/constants";

function Dashboard() {
  return (
    <div className="flex items-center justify-center flex-col h-full ">
      <Text>WIP</Text>
      <Button href={Routes.UPDATE_PROGRESS}>Atualizar Progresso</Button>
    </div>
  );
}

export default Dashboard;
