import NoteIcon from "../assets/images/note_icon.png";
import React from "react";

const dragNote = new Image();
dragNote.src = NoteIcon;

const initDrag = (event) => {
  event.target.style.cursor = dragNote;
  event.dataTransfer.setDragImage(dragNote, 0, 20);
};

export { initDrag };
