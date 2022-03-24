import React from "react";
import "./NoteDropdown.scss";
import { freqTable } from "../../../../../../../assets/schema/constants";
import PropTypes from "prop-types";
import { useStrings } from "../../../../../../../hooks/stringsContext";
import OutsideAlerter from "../../../../../../../hooks/outsideAlerter";
import NoteDropdownItem from "./NoteDropdownItem/NoteDropdownItem";

const NoteDropdown = function NoteDropdown({
  currentNote,
  dropdownToggle,
  id,
}) {
  const notes = ["Ab", "Bb", "C", "Db", "Eb", "F", "Gb"];
  const octaves = ["1", "2", "3", "4", "5"];

  const { stringsDispatch } = React.useCallback(useStrings());

  const currNote = currentNote.slice(0, -1);
  const currOctave = currentNote.slice(-1);

  console.log(currNote, currOctave);

  const noteDropdownReducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_PROPERTY":
        return {
          ...state,
          [action.property]:
            state[action.property] === action.payload ? "" : action.payload,
        };
      default:
        return state;
    }
  };

  const [noteDropdownState, noteDropdownDispatch] = React.useReducer(
    noteDropdownReducer,
    {
      note: "",
      flat: "",
      octave: "",
    }
  );

  React.useEffect(() => {}, [noteDropdownState]);

  const NoteColumn = () => {
    return (
      <div className="noteDropdown__noteColumn">
        {notes.map((note, index) => (
          <NoteDropdownItem key={index} note={note} currentNote={currNote} />
        ))}
      </div>
    );
  };

  const OctaveColumn = () => {
    return (
      <div className="noteDropdown__octaveColumn">
        {octaves.map((octave, index) => (
          <div key={index} className="noteDropdown__octaveColumnItem">
            {octave === currOctave ? (
              <span className="noteDropdown__octaveColumnItemCurrent">
                {octave}
              </span>
            ) : (
              <React.Fragment>{octave}</React.Fragment>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <OutsideAlerter callback={() => dropdownToggle()}>
      <div className="noteDropdown">
        <NoteColumn />
        <OctaveColumn />
      </div>
    </OutsideAlerter>
  );
};

NoteDropdown.propTypes = {
  id: PropTypes.number,
  currentNote: PropTypes.string,
  dropdownToggle: PropTypes.func,
};

export default NoteDropdown;
