import "./NeckString.scss";
import React from "react";
import PropTypes from "prop-types";
import { useStrings } from "../../../../hooks/stringsContext";
import { useAudio } from "../../../../hooks/audioContext";
import { playFrequency } from "../../../../utils/audioFunctions";

const NeckString = React.memo(function NeckString({ id }) {
  const { strings } = useStrings();
  const { audio } = useAudio();

  const neckStringClass = `neckString neckString__${id}`;

  const stringFreq = strings[id - 1].frequency;

  return (
    <img
      className={neckStringClass}
      src={require(`../../../../assets/images/guitar/GuitarNeck_String${id}.svg`)}
      onMouseEnter={() => {
        audio.mute ? null : playFrequency(stringFreq, audio.volume);
      }}
    />
  );
});

NeckString.propTypes = {
  id: PropTypes.number,
};

export default NeckString;
