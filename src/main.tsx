import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// The generated SEO HTML is a static snapshot of individual pages, not the
// full App tree. Hydrating it as <App /> causes React error #418/#423.
// Keep client rendering until server and client trees match exactly.
const container = document.getElementById("root");
if (!container) throw new Error("Missing root element");
createRoot(container).render(<App />);
