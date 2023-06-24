import { State } from "country-state-city";
import React from "react";

export default function StateOption() {
  const t = State.getStatesOfCountry("US").map((x) => (
    <option value={x.name}>{x.name}</option>
  ));
  return <>{t}</>;
}
