import "./ResetButton.scss";
import { useStrings } from "../../../../../hooks/stringsContext";

const ResetButton = () => {
  const { strings, stringsDispatch } = useStrings();

  const resetStrings = () => stringsDispatch({ type: "RESET_STRINGS" });

  return (
    <button className="resetButton" onClick={resetStrings}>
      Reset!
    </button>
  );
};

export default ResetButton;
