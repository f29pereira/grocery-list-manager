import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/styles/globals.css";
import { RouterProvider } from "react-router";
import { router } from "./router";
import ThemeProvider from "./contexts/ThemeContext/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    }
  </StrictMode>,
);
