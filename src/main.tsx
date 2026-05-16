import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";

// 👇 BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(<App />);