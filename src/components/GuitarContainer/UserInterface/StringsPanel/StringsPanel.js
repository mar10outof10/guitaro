import "./StringsPanel.scss";
import StringsPanelItem from "./StringsPanelItem/StringsPanelItem";
import { useStrings } from "../../../../hooks/stringsContext";

const StringsPanel = () => {
  const { strings } = useStrings();

  console.log(strings);

  const stringItems = strings
    .map((string) => {
      const { id, frequency } = { ...string };
      console.log(id, frequency);
      return <StringsPanelItem id={id} frequency={frequency} />;
    })
    .reverse();

  console.log(stringItems);
  return <ol className="stringsPanel">{stringItems}</ol>;
};

export default StringsPanel;
