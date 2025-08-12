import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async"; // Add this
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <HelmetProvider> {/* Wrap your app with this */}
    <App />
  </HelmetProvider>
);