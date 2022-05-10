import React from "react";
import "./NoteContainer.scss";
import PropTypes from "prop-types";
import { freqTable } from "assets/schema/constants";
import TuningAccuracyLight from "./TuningAccuracyLight/TuningAccuracyLight";
import NoteDropdown from "./NoteDropdown/NoteDropdown";

const NoteContainer = function NoteContainer({ id, frequency }) {
  const [currentNote, setcurrentNote] = React.useState();
  const [dropdownState, setDropdownState] = React.useState("CLOSED");

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

  const dropdownToggle = () => {
    dropdownState === "CLOSED"
      ? setDropdownState("OPEN")
      : setDropdownState("CLOSED");
  };

  return (
    <div className="noteContainer">
      <div className="noteContainer__noteDropdown">
        {dropdownState === "OPEN" && (
          <NoteDropdown
            currentNote={currentNote}
            dropdownToggle={dropdownToggle}
            id={id}
          ></NoteDropdown>
        )}
        {dropdownState === "CLOSED" && (
          <div className="noteContainer__currentNote" onClick={dropdownToggle}>
            {currentNote}
          </div>
        )}
      </div>
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
