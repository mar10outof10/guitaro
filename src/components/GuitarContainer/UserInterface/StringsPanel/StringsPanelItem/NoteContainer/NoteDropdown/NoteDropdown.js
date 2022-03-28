import React from "react";
import "./NoteDropdown.scss";
import { freqTable } from "../../../../../../../assets/schema/constants";
import PropTypes from "prop-types";
import { useStrings } from "../../../../../../../hooks/stringsContext";
import OutsideTrigger from "../../../../../../../hooks/outsideTrigger";
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
        console.log(state);
        return {
          ...state,
          [action.property]:
            state[action.property] === action.payload ? null : action.payload,
        };
      default:
        return state;
    }
  };

  const [noteDropdownState, noteDropdownDispatch] = React.useReducer(
    noteDropdownReducer,
    {
      note: null,
      octave: null,
    }
  );

  console.log(noteDropdownState);

  React.useEffect(() => {
    if (noteDropdownState.note && noteDropdownState.octave) {
      console.log("ahh");
      stringsDispatch({
        type: "SET_FREQUENCY_TO_NOTE",
        id,
        note: `${noteDropdownState.note}${noteDropdownState.octave}`,
      });
      dropdownToggle();
    }
  }, [noteDropdownState]);

  const NoteColumn = () => {
    return (
      <div className="noteDropdown__noteColumn">
        {notes.map((note, index) => (
          <NoteDropdownItem
            key={index}
            note={note}
            currentNote={currNote}
            selectedNote={noteDropdownState.note}
            noteDropdownDispatch={noteDropdownDispatch}
          />
        ))}
      </div>
    );
  };

  const OctaveColumn = () => {
    return (
      <div className="noteDropdown__octaveColumn">
        {octaves.map((octave, index) => (
          <div
            key={index}
            className="noteDropdown__octaveColumnItem"
            onClick={() =>
              noteDropdownDispatch({
                type: "TOGGLE_PROPERTY",
                property: "octave",
                payload: octave,
              })
            }
          >
            {octave === noteDropdownState.octave ? (
              <span className="noteDropdown__octaveColumnItem__border"></span>
            ) : null}
            {octave === currOctave ? (
              <span className="noteDropdown__octaveColumnItem__current">
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
    <OutsideTrigger callback={() => dropdownToggle()}>
      <div className="noteDropdown">
        <NoteColumn />
        <OctaveColumn />
      </div>
    </OutsideTrigger>
  );
};

NoteDropdown.propTypes = {
  id: PropTypes.number,
  currentNote: PropTypes.string,
  dropdownToggle: PropTypes.func,
};

export default NoteDropdown;
