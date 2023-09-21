import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./footer";
import Home from "./home";
import styles from "./global.module.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Footer />
    <Home />
  </React.StrictMode>
);
