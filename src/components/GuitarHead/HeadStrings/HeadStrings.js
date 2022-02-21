import "./HeadStrings.scss";
import HeadString from "./HeadString/HeadString.js";

const HeadStrings = () => {
  return (
    <div className="headStrings">
      <div className="headStrings__column">
        <HeadString id="3" />
        {/* Guitar strings start from bottom left therefore top left is string 3*/}
        <HeadString id="2" />
        <HeadString id="1" />
      </div>
      <div className="headStrings__column">
        <HeadString id="4" />
        <HeadString id="5" />
        <HeadString id="6" />
      </div>
    </div>
  );
};

export default HeadStrings;
