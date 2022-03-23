import React from "react";
import "./StringsPanelItem.scss";
import PropTypes from "prop-types";
import StringLabel from "./StringLabel/StringLabel";
import NoteContainer from "./NoteContainer/NoteContainer";

const StringsPanelItem = React.memo(function StringsPanelItem({
  id,
  frequency,
}) {
  return (
    <li className="stringsPanelItem">
      <StringLabel frequency={frequency}>{id}</StringLabel>
      <div className="stringsPanelItem__frequency">
        Frequency: {frequency}hz
      </div>
      <NoteContainer id={id} frequency={frequency} />
    </li>
  );
});

StringsPanelItem.propTypes = {
  id: PropTypes.number,
  frequency: PropTypes.number,
};

export default StringsPanelItem;
