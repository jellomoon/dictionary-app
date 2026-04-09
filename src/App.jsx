import { useState } from "react";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <Dictionary />
        <footer>
          Coded with 🤍 by Mona Beyersdorf, open-sourced on{" "}
          <a href="https://github.com/jellomoon/dictionary-app">GitHub</a>
        </footer>
      </div>
    </div>
  );
}
