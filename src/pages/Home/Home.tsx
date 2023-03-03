import { Navigate } from "react-router-dom";

import { useAuth } from "@/store";

function Home() {
  const isAuthenticated = useAuth((state) => !!state.token);

  if (!isAuthenticated) {
    return <Navigate to="login" />;
  }

  return <div>Home</div>;
}

export default Home;
