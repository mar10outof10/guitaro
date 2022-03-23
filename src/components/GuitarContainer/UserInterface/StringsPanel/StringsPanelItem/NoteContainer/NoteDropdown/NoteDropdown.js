import React from "react";
import "./NoteDropdown.scss";
import { freqTable } from "../../../../../../../assets/schema/constants";
import PropTypes from "prop-types";
import { useStrings } from "../../../../../../../hooks/stringsContext";

const NoteDropdown = function NoteDropdown({ currentNote, dropdownToggle }) {
  const notes = ["Ab", "Bb", "C", "Db", "Eb", "F", "Gb"];
  const octaves = [1, 2, 3, 4, 5];

  const currNote = currentNote.slice(0, -1);
  const currOctave = currentNote.slice(-1);

  console.log(currNote, currOctave);

  const NoteColumn = () => {
    return (
      <div className="noteDropdown__noteColumn">
        {notes.map((note, index) => (
          <div key={index} className="noteDropdown__noteColumnItem">
            {note === currNote ? (
              <span className="noteDropdown__noteColumnItemCurrent">
                {note}
              </span>
            ) : (
              note
            )}
          </div>
        ))}
      </div>
    );
  };

  const OctaveColumn = () => {
    return (
      <div className="noteDropdown__octaveColumn">
        {octaves.map((octave, index) => (
          <div key={index} className="octaveDropdown__octaveColumnItem">
            {octave}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="noteDropdown">
      <NoteColumn />
      <OctaveColumn />
    </div>
  );
};

NoteDropdown.propTypes = {
  currentNote: PropTypes.string,
  dropdownToggle: PropTypes.func,
};

export default NoteDropdown;
