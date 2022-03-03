import React from "react";
import "./StringsPanelItem.scss";
import { freqTable } from "../../../../../assets/schema/constants";
import PropTypes from "prop-types";
import TuningAccuracyLight from "./TuningAccuracyLight/TuningAccuracyLight";

const StringsPanelItem = ({ id, frequency }) => {
  const [stringNote, setStringNote] = React.useState();

  React.useEffect(() => {
    for (const note in freqTable) {
      if (
        freqTable[note].low <= frequency &&
        frequency < freqTable[note].high
      ) {
        setStringNote(note);
        break;
      }
    }
  }, [frequency]);

  return (
    <li className="stringsPanelItem">
      <div className="stringsPanelItem__stringID">{id}</div>
      <div className="stringsPanelItem__frequency">
        Frequency: {frequency}hz
      </div>
      <div className="stringsPanelItem__note">{stringNote}</div>
      {stringNote && (
        <TuningAccuracyLight id={id} note={stringNote} frequency={frequency} />
      )}
    </li>
  );
};

StringsPanelItem.propTypes = {
  id: PropTypes.number,
  frequency: PropTypes.number,
};

export default StringsPanelItem;
