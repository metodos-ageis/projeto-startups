import { Navigate } from "react-router-dom";

import { useAuth } from "@/store";

function withCredentials<T extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<T>
) {
  return function Wrapped(props: T) {
    const { token } = useAuth();
    if (!token) {
      return <Navigate to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withCredentials;
