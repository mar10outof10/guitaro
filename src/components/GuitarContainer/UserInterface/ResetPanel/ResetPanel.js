import "./ResetPanel.scss";
import { useStrings } from "hooks/stringsContext";

const ResetPanel = () => {
  const { strings, stringsDispatch } = useStrings();

  const resetStrings = () => stringsDispatch({ type: "RESET_STRINGS" });

  return (
    <button className="resetPanel" onClick={resetStrings}>
      Reset!
    </button>
  );
};

export default ResetPanel;
