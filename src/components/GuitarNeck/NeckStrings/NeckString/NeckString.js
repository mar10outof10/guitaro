import "./NeckString.scss";
import React from "react";
import PropTypes from "prop-types";

const NeckString = React.memo(function NeckString({ id }) {
  const neckStringClass = `neckString neckString__${id}`;

  return (
    <img
      className={neckStringClass}
      src={require(`../../../../assets/images/guitar/GuitarNeck_String${id}.svg`)}
    />
  );
});

NeckString.propTypes = {
  id: PropTypes.number,
};

export default NeckString;
