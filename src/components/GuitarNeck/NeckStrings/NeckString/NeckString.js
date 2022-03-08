import "./NeckString.scss";
import React from "react";
import PropTypes from "prop-types";
import { useStrings } from "../../../../hooks/stringsContext";
import { playFrequency } from "../../../../utils/audioFunctions";

const NeckString = React.memo(function NeckString({ id }) {
  const { strings } = useStrings();

  const neckStringClass = `neckString neckString__${id}`;

  const stringFreq = strings[id - 1].frequency;

  return (
    <img
      className={neckStringClass}
      src={require(`../../../../assets/images/guitar/GuitarNeck_String${id}.svg`)}
      onMouseEnter={() => playFrequency(stringFreq)}
    />
  );
});

NeckString.propTypes = {
  id: PropTypes.number,
};

export default NeckString;
