import NoteIcon from "../assets/images/note_icon.png";
import React from "react";

const dragNote = new Image();
dragNote.src = NoteIcon;

const initDrag = (event) => {
  console.log("tKey dragStart");
  event.target.style.cursor = dragNote;
  event.dataTransfer.setDragImage(dragNote, 0, 20);
};

const endDrag = (event) => {
  console.log("tKey dragEnd");
};

export { initDrag, endDrag };
