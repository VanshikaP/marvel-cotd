import React from "react";

import Character from "./components/Character";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">Marvel Character of the day</h1>
      <Character />
    </div>
  );
}
