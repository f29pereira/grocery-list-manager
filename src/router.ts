import { createBrowserRouter } from "react-router";
import Root from "./routes/root";

/**
 * Routes configuration
 */
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    // TO DO: Add Home component
    /*children: [{ index: true, Component: Home }],*/
  },
]);
