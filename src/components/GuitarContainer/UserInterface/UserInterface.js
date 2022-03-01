import "./UserInterface.scss";
import StringsPanel from "./StringsPanel/StringsPanel";
import OptionsPanel from "./OptionsPanel/OptionsPanel";

const UserInterface = () => {
  return (
    <section className="userInterface">
      <OptionsPanel />
      <StringsPanel />
      <OptionsPanel />
    </section>
  );
};

export default UserInterface;
