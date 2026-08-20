import { createBrowserRouter } from "react-router";
import Root from "./routes/root";
import RootErrorBoundary from "./routes/rootErrorBoundary";

/**
 * Routes configuration
 */
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    ErrorBoundary: RootErrorBoundary,
    children: [
      // TO DO: Add Home component
      //{ index: true, Component: Home }, // renders at "/"
      //{ path: "toDo", Component: ToDo }, // renders at "/toDo"
    ],
  },
]);
