import "./NeckString.scss";
import React from "react";
import PropTypes from "prop-types";
import { useStrings } from "../../../../hooks/stringsContext";

const NeckString = React.memo(function NeckString({ id }) {
  const { strings, stringsDispatch } = useStrings();

  const neckStringClass = `neckString neckString__${id}`;

  const hoverString = () => {
    stringsDispatch({
      type: "PLAY_STRING",
      frequency: strings[id - 1].frequency,
    });
    console.log(strings[id - 1].frequency);
  };

  return (
    <img
      className={neckStringClass}
      src={require(`../../../../assets/images/guitar/GuitarNeck_String${id}.svg`)}
      onMouseEnter={hoverString}
    />
  );
});

NeckString.propTypes = {
  id: PropTypes.number,
};

export default NeckString;
