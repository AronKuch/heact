export const Settings = () => {
  return <div className="settings">Settings</div>;
};

export const When = () => {
  return <div className="when">Date -- Time</div>;
};

export const Section = (props) => {
  return <div className="{props.name}">{props.name} +</div>;
};
