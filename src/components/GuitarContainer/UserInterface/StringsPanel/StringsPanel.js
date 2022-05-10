import "./StringsPanel.scss";
import React from "react";
import StringsPanelItem from "./StringsPanelItem/StringsPanelItem";
import { useStrings } from "hooks/stringsContext";
import { useOverlay } from "hooks/overlayContext";

const StringsPanel = React.memo(function StringsPanel() {
  const { strings } = useStrings();
  const { overlayDispatch } = useOverlay();

  const [mobileActive, setMobileActive] = React.useState(false);

  const handleMobileClick = () => {
    setMobileActive(!mobileActive);
    overlayDispatch({ type: "TOGGLE_STRINGS_OPEN" });
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
        <span className="stringsPanel__arrow">&#11014;&#65039;</span>
        <span className="stringsPanel__stringLabel">STRINGS</span>
        <span className="stringsPanel__arrow">&#11014;&#65039;</span>
      </div>
      {stringItems}
    </ol>
  );
});

export default StringsPanel;
