import { createBrowserRouter } from "react-router";
import { PortfolioPage } from "./pages/PortfolioPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PortfolioPage, // Defaulting to this for preview, but setting route below
  },
  {
    path: "/portfolio",
    Component: PortfolioPage,
  }
]);
