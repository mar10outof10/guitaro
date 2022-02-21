import "./GuitarContainer.scss";
import Guitar from "./Guitar/Guitar.js";
import UserInterface from "./UserInterface/UserInterface.js";

const GuitarContainer = () => {
  return (
    <div className="guitarContainer">
      <Guitar />
      <UserInterface />
    </div>
  );
};

export default GuitarContainer;
