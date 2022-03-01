import React from "react";
import "./StringsPanelItem.scss";
import { freqTable } from "../../../../../assets/schema/constants";
import PropTypes from "prop-types";

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
      {id} Frequency: {frequency}hz {stringNote}
    </li>
  );
};

StringsPanelItem.propTypes = {
  id: Number,
  frequency: Number,
};

export default StringsPanelItem;
