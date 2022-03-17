import "./UserInterface.scss";
import React from "react";
import StringsPanel from "./StringsPanel/StringsPanel";
import OptionsPanel from "./OptionsPanel/OptionsPanel";

const UserInterface = React.memo(function UserInterface() {
  return (
    <section className="userInterface">
      <OptionsPanel />
      <StringsPanel />
    </section>
  );
});

export default UserInterface;
