import "./NeckString.scss";
import PropTypes from "prop-types";

const NeckString = ({ id }) => {
  const neckStringClass = `neckString neckString__${id}`;

  const hoverString = () => {
    console.log(`Hovering string ${id}`);
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
