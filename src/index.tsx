import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard/Dashboard";
import PusdiklatBelaNegara from "./pages/Dashboard/components/pusdiklat-bela-negara/PusdiklatBelaNegara";
import PusdiklatTekfungham from "./pages/Dashboard/components/pusdiklat-tekfungham/PusdiklatTekfungham";
import PusdiklatJemenhan from "./pages/Dashboard/components/pusdiklat-jemenhan/PusdiklatJemenhan";
import PusdiklatBahasa from "./pages/Dashboard/components/pusdiklat-bahasa/PusdiklatBahasa";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <PusdiklatBahasa />,
            path: "pusdiklat-bahasa",
          },
          {
            path: "pusdiklat-bela-negara",
            element: <PusdiklatBelaNegara />,
          },
          {
            path: "pusdiklat-tekfungham",
            element: <PusdiklatTekfungham />,
          },
          {
            path: "pusdiklat-jemenhan",
            element: <PusdiklatJemenhan />,
          },
        ],
      },
    ],
  },
]);
root.render(<RouterProvider router={router} />);
