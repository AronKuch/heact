import { useState } from "react";
// import ReactHtmlParser from "react-html-parser";

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
      <input
        type="time"
        id="Time"
        name="Time"
        defaultValue={now.toTimeString().substr(0, 5)}
      />
    </div>
  );
};

const DataSelector = (props) => {
  switch (props.name) {
    case "Medicine":
      return <>Drug data will go here {props.number} times.</>;
    case "Symptom":
      return <>What she's feeling will go here {props.number} times.</>;
    case "Measurement":
      return <>What data she's producing will go here.</>;
    case "Food":
      return <>What she's been eating will go here {props.number} times.</>;
    default:
      return <>Generic data will go here.</>;
  }
};

const SectionData = (props) => {
  let listItems = [];
  for (let i = 0; i < props.number; i++) {
    listItems.push(
      <li key={i}>
        <DataSelector name={props.name} number={i} />
      </li>
    );
  }
  return listItems;
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
