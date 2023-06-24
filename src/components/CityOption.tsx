import { City } from "country-state-city";
import React from "react";

interface stateProp {
  state: string;
}

export default function StateOption(props: stateProp) {
  let s = props.state.toLowerCase();

  console.log(states[s]);
  console.log(props.state.toLowerCase());
  const t = City.getCitiesOfState("US", states[s]).map((x) => (
    <option value={x.name}>{x.name}</option>
  ));
  return <>{t}</>;
}
interface stateCode {
  state: string;
  code: string;
}
let states: { [key: string]: string } = {
  arizona: "AZ",
  alabama: "AL",
  alaska: "AK",
  arkansas: "AR",
  california: "CA",
  colorado: "CO",
  connecticut: "CT",
  "district of columbia": "DC",
  delaware: "DE",
  florida: "FL",
  georgia: "GA",
  hawaii: "HI",
  idaho: "ID",
  illinois: "IL",
  indiana: "IN",
  iowa: "IA",
  kansas: "KS",
  kentucky: "KY",
  louisiana: "LA",
  maine: "ME",
  maryland: "MD",
  massachusetts: "MA",
  michigan: "MI",
  minnesota: "MN",
  mississippi: "MS",
  missouri: "MO",
  montana: "MT",
  nebraska: "NE",
  nevada: "NV",
  "new hampshire": "NH",
  "new jersey": "NJ",
  "new mexico": "NM",
  "new york": "NY",
  "north carolina": "NC",
  "north dakota": "ND",
  ohio: "OH",
  oklahoma: "OK",
  oregon: "OR",
  pennsylvania: "PA",
  "rhode island": "RI",
  "south carolina": "SC",
  "south dakota": "SD",
  tennessee: "TN",
  texas: "TX",
  utah: "UT",
  vermont: "VT",
  virginia: "VA",
  washington: "WA",
  "west virginia": "WV",
  wisconsin: "WI",
  wyoming: "WY",
  "american samoa": "AS",
  guam: "GU",
  "northern mariana islands": "MP",
  "puerto rico": "PR",
  "us virgin islands": "VI",
  "us minor outlying islands": "UM",
};
