import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}:</h3>
      <div className="definition">
        <div className="definition">
          {props.meaning.definitions[0].definition}
        </div>
        <Example example={props.meaning.definitions[0].example} />
        <Synonyms synonyms={props.meaning.definitions[0].synonyms} />
      </div>
    </div>
  );
}
