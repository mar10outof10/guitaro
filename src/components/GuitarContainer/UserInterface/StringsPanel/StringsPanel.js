import "./StringsPanel.scss";
import StringsPanelItem from "./StringsPanelItem/StringsPanelItem";
import { useStrings } from "../../../../hooks/stringsContext";

const StringsPanel = () => {
  const { strings } = useStrings();

  const stringItems = strings.map((string) => {
    const { id, frequency } = { ...string };
    return <StringsPanelItem key={id} id={id} frequency={frequency} />;
  });

  return <ol className="stringsPanel">{stringItems}</ol>;
};

export default StringsPanel;
