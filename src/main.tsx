import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.tsx";
import Detail from "./Detail.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import todoStore from "./todoSore.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Detail />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={todoStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
