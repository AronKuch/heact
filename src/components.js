import { useState } from "react";
import ReactHtmlParser from "react-html-parser";

export const Settings = () => {
  return <div className="settings">Settings</div>;
};

export const When = () => {
  return <div className="when">Date -- Time</div>;
};

const SectionData = (props) => {
  let returnHTML = "";
  for (let i = 0; i <= props.number; i++) {
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
