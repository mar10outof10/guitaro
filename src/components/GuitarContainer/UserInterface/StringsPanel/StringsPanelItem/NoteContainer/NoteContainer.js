import React from "react";
import "./NoteContainer.scss";
import PropTypes from "prop-types";
import { useStrings } from "../../../../../../hooks/stringsContext";
import { freqTable } from "../../../../../../assets/schema/constants";
import TuningAccuracyLight from "./TuningAccuracyLight/TuningAccuracyLight";

const NoteContainer = function NoteContainer({ id, frequency }) {
  const [currentNote, setcurrentNote] = React.useState();

  React.useEffect(() => {
    for (const note in freqTable) {
      if (
        freqTable[note].low <= frequency &&
        frequency < freqTable[note].high
      ) {
        setcurrentNote(note);
        break;
      }
    }
  }, [frequency]);

  return (
    <div className="noteContainer">
      <div className="noteContainer__noteDropdown">{currentNote}</div>
      {currentNote && (
        <TuningAccuracyLight
          id={id}
          currentNote={currentNote}
          frequency={frequency}
        />
      )}
    </div>
  );
};

NoteContainer.propTypes = {
  id: PropTypes.number,
  frequency: PropTypes.number,
};

export default NoteContainer;
