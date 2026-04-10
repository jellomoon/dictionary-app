import { useState } from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="dictionary" />
        <footer>
          Coded with 🩷 by Mona Beyersdorf, open-sourced on{" "}
          <a
            href="https://github.com/jellomoon/dictionary-app"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
