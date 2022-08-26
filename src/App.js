import { useState } from "react";
import "./App.css";

export default function App() {
  let [word, setWord] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Looking for ${word}`);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a word to look up"
          onChange={updateWord}
        />
        <button type="submit" value="search">
          search
        </button>
      </form>
    </div>
  );
}
