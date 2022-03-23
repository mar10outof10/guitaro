import "./UserInterface.scss";
import React from "react";
import StringsPanel from "./StringsPanel/StringsPanel";
import OptionsPanel from "./OptionsPanel/OptionsPanel";
import TopOptionsPanel from "./TopOptionsPanel/TopOptionsPanel";

const UserInterface = React.memo(function UserInterface() {
  return (
    <section className="userInterface">
      <OptionsPanel />
      <TopOptionsPanel />
      <StringsPanel />
    </section>
  );
});

export default UserInterface;
