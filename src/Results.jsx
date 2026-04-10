import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (!props.results) return null;

  return (
    <div className="Results">
      <section>
        <h2 className="result-word">{props.results.word}</h2>

        <Phonetics phonetics={props.results.phonetics} />
      </section>
      {props.results.meanings.map(function (meaning, index) {
        return (
          <section key={index}>
            <Meaning meaning={meaning} />
          </section>
        );
      })}
    </div>
  );
}
