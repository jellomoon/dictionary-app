import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

export default function Results(props) {
  if (!props.results) return null;

  return (
    <div className="Results mt-5">
      <h2>{props.results.word}</h2>

      <Phonetics phonetics={props.results.phonetics} />

      {props.results.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        );
      })}
    </div>
  );
}
