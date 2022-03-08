import "./HeadString.scss";
import React from "react";
import PropTypes from "prop-types";

const HeadString = React.memo(function HeadString({ id }) {
  const headStringClass = `headString headString__${id}`;

  const hoverString = () => {
    console.log(`Hovering string ${id}`);
  };
  return (
    <img
      className={headStringClass}
      src={require(`../../../../assets/images/guitar/GuitarNeck_String${id}.svg`)}
      onMouseEnter={hoverString}
    />
  );
});

HeadString.propTypes = {
  id: PropTypes.number,
};
export default HeadString;
