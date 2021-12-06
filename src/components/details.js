import React from "react";

const Medicine = (props) => {
  return (
    <>
      <input
        type="text"
        id={"drug_" + props.number}
        name={"drug_" + props.number}
        placeholder="Drug name"
      />
      <input
        type="number"
        id={"dose_" + props.number}
        name={"dose_" + props.number}
        placeholder="Dose"
        min="0"
        max="1000"
        step="0.05"
      />
    </>
  );
};

const Symptom = (props) => {
  return (
    <>
      <input
        type="text"
        id={"symptom_" + props.number}
        name={"symptom_" + props.number}
        placeholder="Symptom"
      />
      <input
        type="number"
        id={"severity_" + props.number}
        name={"severity_" + props.number}
        placeholder="Scale"
        min="0"
        max="10"
        step="1"
      />
      + Add Details
    </>
  );
};
const Measurement = (props) => {
  return (
    <>
      <input
        type="text"
        id={"measurement_" + props.number}
        name={"measurement_" + props.number}
        placeholder="Measurement"
      />
      <input
        type="number"
        id={"value_" + props.number}
        name={"value_" + props.number}
        placeholder="Value"
        min="0"
        max="200"
        step="0.1"
      />
      + Add Details
    </>
  );
};
const Food = (props) => {
  return (
    <>
      <input
        type="text"
        id={"meal_" + props.number}
        name={"meal_" + props.number}
        placeholder="Meal"
      />
      <input
        type="number"
        id={"calories_" + props.number}
        name={"calories_" + props.number}
        placeholder="Calories"
        min="0"
        max="900"
        step="1"
      />
      + Add Details
    </>
  );
};
const Other = (props) => {
  return (
    <>
      <textarea
        id={"details_" + props.number}
        name={"details_" + props.number}
        placeholder="Add all the details you want"
      />
    </>
  );
};

const DataSelector = (props) => {
  switch (props.name) {
    case "Medicine":
      return <Medicine number={props.number} />;
    case "Symptom":
      return <Symptom number={props.number} />;
    case "Measurement":
      return <Measurement number={props.number} />;
    case "Food":
      return <Food Medicine number={props.number} />;
    default:
      return <Other number={props.number} />;
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

export default SectionData;
