import { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./App.css";

export default function App() {
  let [word, setWord] = useState("earth");
  let [results, setResults] = useState([]);
  let [photos, setPhotos] = useState(null);

  function lookUp(response) {
    setResults(response.data);
  }

  function searchPhotos(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(dictionaryApiUrl).then(lookUp);

    let pexelsApiKey =
      "563492ad6f91700001000001046e5d4c1fb14fe0bf3353eb1091ad8b";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=8`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers }).then(searchPhotos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateWord(event) {
    setWord(event.target.value);
  }

  if (results.length > 0) {
    return (
      <div className="App">
        <section>
          <header>English Dictionary for visual learners</header>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter one English word to look up"
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
        </section>
        <div className="search-results">
          <Results results={results} />
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
