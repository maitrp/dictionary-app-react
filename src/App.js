import { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  let [word, setWord] = useState(null);

  function lookUp(response) {
    console.log(response.data);
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
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a English word to look up"
          onChange={updateWord}
        />
        <button type="submit" value="search">
          search
        </button>
      </form>
    </div>
  );
}
