import "./NeckString.scss";
import PropTypes from "prop-types";
import { useAudio } from "../../../../hooks/audioContext";
import { useStrings } from "../../../../hooks/stringsContext";

const NeckString = ({ id }) => {
  const { audioDispatch } = useAudio();
  const { strings } = useStrings();

  const neckStringClass = `neckString neckString__${id}`;

  const hoverString = () => {
    audioDispatch({
      type: "PLAY_FREQUENCY",
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
};

NeckString.propTypes = {
  id: PropTypes.number,
};

export default NeckString;
