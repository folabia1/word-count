import React, { useState } from 'react';
import { TextInfo } from './components/TextInfo';
import { Filters } from './components/Filters';
import './App.css';

function App() {
  const [ text, setText ] = useState("");
  const handleChangeText = (event) => {
    setText(event.target.value);
  }

  let [ currentFilter, setCurrentFilter ] = useState({name: "anyCharacters", regex: /^.+$/})
  const handleChangeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  }

  return (
    <div className="App">
      <header>
        <h1>Word Count</h1>
        <p className="tagline">Write or paste your text below to see information about it.</p>
      </header>
      <main>
        <div className="textAndFilters">
          <textarea className="TextInput" placeholder="Enter you text here..." onChange={handleChangeText} />
          <Filters currentFilter={currentFilter} onClick={handleChangeFilter}/>
        </div>
        <TextInfo text={text} currentFilter={currentFilter} />
      </main>
    </div>
  );
}

export default App;
