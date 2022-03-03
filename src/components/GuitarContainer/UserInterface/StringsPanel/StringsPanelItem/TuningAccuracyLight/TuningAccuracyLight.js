import React from "react";
import "./TuningAccuracyLight.scss";
import { freqTable } from "../../../../../../assets/schema/constants";
import PropTypes from "prop-types";

const TuningAccuracyLight = ({ id, note, frequency }) => {
  // console.log(note);

  const [lowRange, setLowRange] = React.useState(freqTable[note].low);
  const [highRange, setHighRange] = React.useState(freqTable[note].high);
  const [mid, setMid] = React.useState(freqTable[note].freq);
  const [accuracy, setAccuracy] = React.useState();

  React.useEffect(async () => {
    setMid(freqTable[note].freq);
    setLowRange(mid - freqTable[note].low);
    setHighRange(freqTable[note].high - mid);
  }, [note]);

  React.useEffect(() => {
    if (frequency >= mid) {
      setAccuracy(((frequency - mid) / highRange).toFixed(2));
    } else {
      setAccuracy(((mid - frequency) / lowRange).toFixed(2));
    }
  }, [frequency]);

  console.log(freqTable[note].freq, mid);
  return <div className="TuningAccuracyLight">{accuracy}</div>;
};

TuningAccuracyLight.propTypes = {
  id: PropTypes.number,
  frequency: PropTypes.number,
  note: PropTypes.string,
};

export default TuningAccuracyLight;
