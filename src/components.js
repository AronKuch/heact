import { useState } from "react";
import ReactHtmlParser from "react-html-parser";

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
        defaultValue={now.toISOString().substr(0, 10)}
      />
      &nbsp;|&nbsp;
      <input
        type="time"
        id="Time"
        name="Time"
        defaultValue={now.toTimeString().substr(0, 5)}
      />
    </div>
  );
};

const SectionData = (props) => {
  let returnHTML = "";
  for (let i = 0; i < props.number; i++) {
    returnHTML += `<li key=${i}>${props.name} data will go here ${i}</li>`;
  }
  return ReactHtmlParser(returnHTML);
};

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
