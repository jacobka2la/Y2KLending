import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root");
if (!container) throw new Error("Missing root element");

if (container.hasChildNodes()) {
  hydrateRoot(container, <App />, {
    onRecoverableError(error) {
      console.error("Y2K hydration recovery:", error);
    },
  });
} else {
  createRoot(container).render(<App />);
}
