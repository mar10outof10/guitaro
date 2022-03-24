import React from "react";
import "./NoteDropdownItem.scss";
import { freqTable } from "../../../../../../../../assets/schema/constants";
import PropTypes from "prop-types";
import { useStrings } from "../../../../../../../../hooks/stringsContext";

const NoteDropdownItem = function NoteDropdownItem({ note, currentNote }) {
  const isFlat = note.length === 2 ? true : false;
  const isCurrentNote =
    note === currentNote || note[0] === currentNote ? true : false;

  const Flat = () =>
    isCurrentNote && currentNote.length === 2 ? (
      <sup className="noteDropdownItem__current">b</sup>
    ) : (
      <sup>b</sup>
    );

  const Note = () =>
    isCurrentNote ? (
      <span className="noteDropdownItem__current">{note[0]}</span>
    ) : (
      <React.Fragment>{note[0]}</React.Fragment>
    );

  return (
    <div className="noteDropdownItem">
      <Note />
      {isFlat ? <Flat /> : null}
    </div>
  );
};

NoteDropdownItem.propTypes = {
  note: PropTypes.string,
  currentNote: PropTypes.string,
  dropdownToggle: PropTypes.func,
};

export default NoteDropdownItem;
