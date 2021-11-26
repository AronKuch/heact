import React from "react";
import { Settings, When, Section } from "./components.js";

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
    </div>
  );
}

export default App;
