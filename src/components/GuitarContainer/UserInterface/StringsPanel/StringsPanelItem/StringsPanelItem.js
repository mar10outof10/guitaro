import React from "react";
import "./StringsPanelItem.scss";
import { freqTable } from "../../../../../assets/schema/constants";

const StringsPanelItem = ({ id, frequency }) => {
  console.log(id, frequency);
  const [stringNote, setStringNote] = React.useState();

  React.useEffect(() => {
    for (const note in freqTable) {
      console.log(note, freqTable[note].low, freqTable[note].high, frequency);
      if (
        freqTable[note].low <= frequency &&
        frequency < freqTable[note].high
      ) {
        console.log("note", note);
        setStringNote(note);
        break;
      }
    }
  }, [frequency]);

  return (
    <li key={id} className="stringsPanelItem">
      {id} Frequency: {frequency}hz {stringNote}
    </li>
  );
};

export default StringsPanelItem;
