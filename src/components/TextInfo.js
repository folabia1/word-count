import React from 'react';


export function TextInfo(props) {
  let words = props.text.split(/\s/).filter(word => props.currentFilter["regex"].test(word));
  let numWords = words.length;
  return (
    <div className="TextInfo">
      <p>NumWords: {numWords}</p>
    </div>
  )
}
