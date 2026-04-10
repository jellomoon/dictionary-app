import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import "./PhoneticDisplay.css";

export default function Phonetic(props) {
  const audioRef = useRef(null);

  function playAudio() {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  }

  let audioButton = null;
  let audioElement = null;
  let textElement = null;

  if (props.phonetic.audio) {
    audioButton = (
      <button onClick={playAudio} className="audio-button">
        <FontAwesomeIcon icon={faVolumeUp} />
      </button>
    );

    audioElement = <audio ref={audioRef} src={props.phonetic.audio}></audio>;
  }

  if (props.phonetic.text) {
    textElement = <span className="text">{props.phonetic.text}</span>;
  }

  return (
    <div className="Phonetic">
      {audioButton}
      {textElement}
      {audioElement}
    </div>
  );
}
