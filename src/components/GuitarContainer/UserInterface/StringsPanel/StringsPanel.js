import "./StringsPanel.scss";
import React from "react";
import StringsPanelItem from "./StringsPanelItem/StringsPanelItem";
import { useStrings } from "../../../../hooks/stringsContext";

const StringsPanel = React.memo(function StringsPanel() {
  const { strings } = useStrings();

  const stringItems = strings
    .map((string) => {
      const { id, frequency } = { ...string };
      return <StringsPanelItem key={id} id={id} frequency={frequency} />;
    })
    .reverse();

  return (
    <ol className="stringsPanel">
      <div className="stringsPanel__mobileToggle">^ STRINGS ^</div>
      {stringItems}
    </ol>
  );
});

export default StringsPanel;
