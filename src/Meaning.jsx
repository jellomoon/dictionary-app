import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning mt-3">
      <h3>{props.meaning.partOfSpeech}:</h3>
      <div className="definition mb-4">
        <strong>Definition: </strong>
        {props.meaning.definitions[0].definition}
        <br />
        <Example example={props.meaning.definitions[0].example} />
        <Synonyms synonyms={props.meaning.definitions[0].synonyms} />
      </div>
      <hr />
    </div>
  );
}
