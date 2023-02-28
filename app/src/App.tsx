import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Login } from "./pages";
import { AppQueryClient } from "./services";

import "./i18next";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "login", element: <Login /> },
]);

function App() {
  return (
    <QueryClientProvider client={AppQueryClient.get()}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
