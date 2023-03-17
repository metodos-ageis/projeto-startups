import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, Login, NotFound, Register, RegisterCompany } from "./pages";
import { AppQueryClient } from "./services";

import "./i18next";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <NotFound /> },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "register-company", element: <RegisterCompany /> },
]);

function App() {
  return (
    <div data-theme="default" className="h-screen w-screen bg-white">
      <QueryClientProvider client={AppQueryClient.get()}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
