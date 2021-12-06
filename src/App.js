import React from "react";
import { Settings, When, Section, Submit } from "./components/sections.js";

function App() {
  return (
    <div className="App">
      <Settings />
      <When />
      <Section name="Medicine" />
      <Section name="Symptom" />
      <Section name="Measurement" />
      <Section name="Food" />
      <Section name="Other" />
      <Submit />
    </div>
  );
}

export default App;
