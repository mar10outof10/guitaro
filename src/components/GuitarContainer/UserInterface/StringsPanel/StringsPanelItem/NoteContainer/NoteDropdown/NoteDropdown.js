import React from "react";
import "./NoteDropdown.scss";
import { freqTable } from "../../../../../../../assets/schema/constants";
import PropTypes from "prop-types";
import { useStrings } from "../../../../../../../hooks/stringsContext";

const NoteDropdown = function NoteDropdown({ currentNote }) {
  const notes = [
    "Ab",
    "A",
    "Bb",
    "B",
    "C",
    "Db",
    "D",
    "Eb",
    "E",
    "F",
    "Gb",
    "G",
  ];
  const octaves = [1, 2, 3, 4, 5];

  const NoteColumn = () => {
    return (
      <div className="noteDropdown__noteColumn">
        {notes.map((note, index) => (
          <div key={index} className="noteDropdown__noteColumnItem">
            {note}
          </div>
        ))}
      </div>
    );
  };

  const OctaveColumn = () => {
    return (
      <div className="octaveDropdown__octaveColumn">
        {octaves.map((octave, index) => {
          <div key={index} className="octaveDropdown__octaveColumnItem">
            {octave}
          </div>;
        })}
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
};

export default NoteDropdown;
