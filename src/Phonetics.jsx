import React from "react";
import PhoneticDisplay from "./PhoneticDisplay";

function getBestPhonetic(phonetics) {
  const both = phonetics.find(function (phoneticItem) {
    return phoneticItem.audio && phoneticItem.text;
  });
  if (both) return both;

  const textOnly = phonetics.find(function (phoneticItem) {
    return phoneticItem.text;
  });
  if (textOnly) return textOnly;

  const audioOnly = phonetics.find(function (phoneticItem) {
    return phoneticItem.audio;
  });
  if (audioOnly) return audioOnly;

  return null;
}

export default function Phonetics(props) {
  const phonetic = getBestPhonetic(props.phonetics);

  if (!phonetic) return null;

  return <PhoneticDisplay phonetic={phonetic} />;
}
