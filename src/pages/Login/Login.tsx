import { Navigate } from "react-router-dom";

import FormPane from "./FormPane";
import LogoPane from "./LogoPane";

import { useAuth } from "@/store";

function Login() {
  const authenticated = useAuth((state) => !!state.token);

  if (authenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="max-w-6xl h-full m-auto flex items-center justify-cente">
      <div className="grid grid-cols-[1fr_minmax(16rem,auto)] px-24 pt-24 w-full">
        <LogoPane />
        <FormPane />
      </div>
    </div>
  );
}

export default Login;
