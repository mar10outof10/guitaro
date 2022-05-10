import React from "react";
import "./TuningAccuracyLight.scss";
import { freqTable } from "assets/schema/constants";
import PropTypes from "prop-types";
import { useStrings } from "hooks/stringsContext";

const TuningAccuracyLight = function TuningAccuracyLight({
  id,
  currentNote,
  frequency,
}) {
  const [lowRange, setLowRange] = React.useState(freqTable[currentNote].low);
  const [highRange, setHighRange] = React.useState(freqTable[currentNote].high);
  const [mid, setMid] = React.useState(freqTable[currentNote].freq);
  const [accuracy, setAccuracy] = React.useState(100);
  const [style, setStyle] = React.useState();

  const { stringsDispatch } = useStrings();

  const setFreqToNote = () =>
    stringsDispatch({ type: "SET_FREQUENCY_TO_NOTE", id, note: currentNote });

  React.useEffect(() => {
    setMid(freqTable[currentNote].freq);
    setLowRange(freqTable[currentNote].freq - freqTable[currentNote].low);
    setHighRange(freqTable[currentNote].high - freqTable[currentNote].freq);
  }, [currentNote]);

  React.useEffect(() => {
    if (frequency >= mid) {
      setAccuracy(100 - (((frequency - mid) / highRange) * 100).toFixed(0));
    } else {
      setAccuracy(
        100 - Math.abs(((mid - frequency) / lowRange) * -100).toFixed(0)
      );
    }
  }, [frequency, mid]);

  React.useEffect(() => {
    if (frequency > mid) {
      setStyle({
        background: `radial-gradient(circle at top, green, ${accuracy}%, transparent), radial-gradient(ellipse at bottom, red, #006f1600)`,
      });
    } else if (frequency < mid) {
      setStyle({
        background: `radial-gradient(circle at bottom, green, ${accuracy}%, transparent), radial-gradient(ellipse at top, red, #006f1600)`,
      });
    } else {
      setStyle({
        background: `radial-gradient(circle at center, green, ${accuracy}%, transparent), radial-gradient(ellipse at bottom, red, #006f1600)`,
        borderColor: `#016200`,
      });
    }
  }, [accuracy]);

  return (
    <div
      className="tuningAccuracyLight"
      style={style}
      onClick={setFreqToNote}
    ></div>
  );
};

TuningAccuracyLight.propTypes = {
  id: PropTypes.number,
  frequency: PropTypes.number,
  currentNote: PropTypes.string,
};

export default TuningAccuracyLight;
