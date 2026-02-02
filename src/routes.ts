import { createBrowserRouter } from "react-router";
import { Landing } from "./pages/Landing";
import { Assignment1 } from "./pages/Assignment1";
import { Assignment2 } from "./pages/Assignment2";
import { Assignment3 } from "./pages/Assignment3";
import { Assignment4 } from "./pages/Assignment4";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/assignment-1",
    Component: Assignment1,
  },
  {
    path: "/assignment-2",
    Component: Assignment2,
  },
  {
    path: "/assignment-3",
    Component: Assignment3,
  },
  {
    path: "/assignment-4",
    Component: Assignment4,
  },
]);
