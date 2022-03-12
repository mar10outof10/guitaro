import "./TuningDropdown.scss";
import React from "react";
import TuningDropdownItem from "./TuningDropdownItem/TuningDropdownItem";
import { useTuning } from "../../../../../hooks/tuningContext";

const TuningDropdown = () => {
  const { tuning } = React.useCallback(useTuning());

  return (
    <ul className="tuningDropdown">
      <TuningDropdownItem key={1} tuning="ESTANDARD_TUNING">
        E Standard
      </TuningDropdownItem>
      <TuningDropdownItem key={2} tuning="EBSTANDARD_TUNING">
        Eb Standard
      </TuningDropdownItem>
      <TuningDropdownItem key={3} tuning="DSTANDARD_TUNING">
        D Standard
      </TuningDropdownItem>
      <TuningDropdownItem key={4} tuning="DROPD_TUNING">
        Drop D
      </TuningDropdownItem>
      <TuningDropdownItem key={5} tuning="DROPA_TUNING">
        Drop A
      </TuningDropdownItem>
      <TuningDropdownItem key={6} tuning="OPENA_TUNING">
        Open A
      </TuningDropdownItem>
      <TuningDropdownItem key={7} tuning="OPENB_TUNING">
        Open B
      </TuningDropdownItem>
      <TuningDropdownItem key={8} tuning="OPENC_TUNING">
        Open C
      </TuningDropdownItem>
      <TuningDropdownItem key={9} tuning="OPEND_TUNING">
        Open D
      </TuningDropdownItem>
      <TuningDropdownItem key={10} tuning="OPENE_TUNING">
        Open E
      </TuningDropdownItem>
      <TuningDropdownItem key={11} tuning="OPENF_TUNING">
        Open F
      </TuningDropdownItem>
      <TuningDropdownItem key={12} tuning="OPENG_TUNING">
        Open G
      </TuningDropdownItem>
      <TuningDropdownItem key={13} tuning="DADGAD_TUNING">
        DADGAD
      </TuningDropdownItem>
    </ul>
  );
};

export default TuningDropdown;
