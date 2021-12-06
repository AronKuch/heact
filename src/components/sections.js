import React, { useState } from "react";
import SectionData from "./details.js";

export const Settings = () => {
  return (
    <div className="settings">
      <h1>Settings</h1>
    </div>
  );
};

export const When = () => {
  let now = new Date();
  return (
    <div className="when">
      <input
        type="date"
        id="Date"
        name="Date"
        class="whenput"
        defaultValue={now.toISOString().substr(0, 10)}
      />
      <input
        type="time"
        id="Time"
        name="Time"
        class="whenput"
        defaultValue={now.toTimeString().substr(0, 5)}
      />
    </div>
  );
};

// Generic component to layout each type of data being collected.
export const Section = (props) => {
  let [number, setStatus] = useState(0);
  return (
    <div className="{props.name}">
      <h1 onClick={() => setStatus(++number)}>{props.name} +</h1>
      <ul>
        <SectionData name={props.name} number={number} />
      </ul>
    </div>
  );
};

export const Submit = () => {
  // eventually do stuff
  return <button>Submit (one day)</button>;
};
