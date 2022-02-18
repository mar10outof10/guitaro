import "./Interactive.scss";
import Guitar from "./Guitar/Guitar.js";
import UserInterface from "./UserInterface/UserInterface.js";

const Interactive = () => {
  return (
    <div className="interactive">
      <Guitar />
      <UserInterface />
    </div>
  );
};

export default Interactive;
