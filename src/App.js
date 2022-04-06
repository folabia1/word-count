import React, { useState } from 'react';
import { TextInfo } from './components/TextInfo';
import './App.css';

function App() {
  const [ text, setText ] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div className="App">
      <h1>Word Count</h1>
      <p className="tagline">Write or paste your text below to see information about it.</p>
      <textarea className="TextInput" placeholder="Enter you text here..." onChange={handleChange} />
      <TextInfo text={text} />
    </div>
  );
}

export default App;
