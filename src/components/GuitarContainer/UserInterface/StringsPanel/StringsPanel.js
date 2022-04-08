import "./StringsPanel.scss";
import React from "react";
import StringsPanelItem from "./StringsPanelItem/StringsPanelItem";
import { useStrings } from "../../../../hooks/stringsContext";

const StringsPanel = React.memo(function StringsPanel() {
  const { strings } = useStrings();

  const [mobileActive, setMobileActive] = React.useState(false);

  const handleMobileClick = () => {
    setMobileActive(!mobileActive);
  };

  const panelClassName = `stringsPanel${
    mobileActive ? " stringsPanel__mobileActive" : ""
  }`;

  const stringItems = strings
    .map((string) => {
      const { id, frequency } = { ...string };
      return <StringsPanelItem key={id} id={id} frequency={frequency} />;
    })
    .reverse();

  return (
    <ol className={panelClassName}>
      <div className="stringsPanel__mobileToggle" onClick={handleMobileClick}>
        ^ STRINGS ^
      </div>
      {stringItems}
    </ol>
  );
});

export default StringsPanel;
