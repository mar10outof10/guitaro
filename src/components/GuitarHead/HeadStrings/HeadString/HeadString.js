import "./HeadString.scss";

const HeadString = ({ id }) => {
  const headStringClass = `headString headString__${id}`;
  return (
    <img
      className={headStringClass}
      src={require(`../../../../assets/images/guitar/GuitarNeck_String${id}.svg`)}
    ></img>
  );
};

export default HeadString;
