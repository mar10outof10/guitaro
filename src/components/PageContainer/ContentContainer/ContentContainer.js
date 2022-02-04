import "./ContentContainer.scss";
import Interactive from "./Interactive/Interactive.js";
import UserInterface from "./UserInterface/UserInterface.js";

const ContentContainer = () => {
  return (
    <div className="contentContainer">
      <Interactive />
      <UserInterface />
    </div>
  );
};

export default ContentContainer;
