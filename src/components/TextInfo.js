import React from 'react';

export function TextInfo(props) {
  let words = props.text.split(/\s/);
  let numWords = words.filter(word => word.length !== 0).length;
  return (
    <p>NumWords: {numWords}</p>
  )
}
