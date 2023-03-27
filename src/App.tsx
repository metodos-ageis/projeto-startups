import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Routes } from "./constants";
import {
  Dashboard,
  Home,
  Login,
  NotFound,
  Register,
  RegisterCompany,
  UpdateProgress,
} from "./pages";
import { AppQueryClient } from "./services";

import "./i18next";

const router = createBrowserRouter([
  { path: Routes.HOME, element: <Home />, errorElement: <NotFound /> },
  { path: Routes.LOGIN, element: <Login /> },
  { path: Routes.REGISTER, element: <Register /> },
  { path: Routes.REGISTER_COMPANY, element: <RegisterCompany /> },
  { path: Routes.UPDATE_PROGRESS, element: <UpdateProgress /> },
  { path: Routes.DASHBOARD, element: <Dashboard /> },
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
