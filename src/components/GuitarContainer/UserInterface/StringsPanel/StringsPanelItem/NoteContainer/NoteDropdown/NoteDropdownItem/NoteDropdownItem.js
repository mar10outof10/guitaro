import React from "react";
import "./NoteDropdownItem.scss";
import { freqTable } from "../../../../../../../../assets/schema/constants";
import PropTypes from "prop-types";
import { useStrings } from "../../../../../../../../hooks/stringsContext";

const NoteDropdownItem = function NoteDropdownItem({
  note,
  currentNote,
  selectedNote,
  noteDropdownDispatch,
}) {
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
      <>{note[0]}</>
    );

  return (
    <div className="noteDropdownItem" onClick={noteDropdownDispatch}>
      {selectedNote && note[0] === selectedNote[0] ? (
        <div
          className={
            selectedNote.length === 2
              ? "noteDropdownItem__selectedFlat"
              : "noteDropdownItem__selected"
          }
        ></div>
      ) : null}
      <div
        className="noteDropdownItem__note"
        onClick={() =>
          noteDropdownDispatch({
            type: "TOGGLE_PROPERTY",
            property: "note",
            payload: note[0],
          })
        }
      >
        <Note />
      </div>
      <div
        className="noteDropdownItem__flat"
        onClick={() =>
          noteDropdownDispatch({
            type: "TOGGLE_PROPERTY",
            property: "note",
            payload: note,
          })
        }
      >
        {isFlat ? <Flat /> : null}
      </div>
    </div>
  );
};

NoteDropdownItem.propTypes = {
  note: PropTypes.string,
  currentNote: PropTypes.string,
  selectedNote: PropTypes.string,
  noteDropdownDispatch: PropTypes.func,
};

export default NoteDropdownItem;
