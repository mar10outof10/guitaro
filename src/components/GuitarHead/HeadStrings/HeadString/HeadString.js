import "./HeadString.scss";

const HeadString = ({ id }) => {
  const headStringClass = `headString headString__${id}`;

  const hoverString = () => {
    console.log(`Hovering string ${id}`);
  };
  return (
    <img
      className={headStringClass}
      src={require(`../../../../assets/images/guitar/GuitarNeck_String${id}.svg`)}
      onMouseEnter={hoverString}
    ></img>
  );
};

export default HeadString;
