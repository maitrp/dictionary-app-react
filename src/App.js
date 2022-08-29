import { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./App.css";

export default function App() {
  let [word, setWord] = useState(null);
  let [results, setResults] = useState([]);

  function lookUp(response) {
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(lookUp);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="App">
      English Dictionary
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter an English word to look up"
          onChange={updateWord}
        />
        <button
          type="submit"
          value="search"
          className="material-symbols-outlined"
        >
          search
        </button>
      </form>
      <Results results={results} />
    </div>
  );
}
