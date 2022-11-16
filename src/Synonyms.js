import "./Synonyms.css";

export default function Synonyms(props) {
  function lookUpSynonym(event) {
    props.setWord(event.target.textContent);
    displaySynonymMeanings();
  }

  function displaySynonymMeanings() {
    props.search();
  }

  if (props.synonyms.length !== 0) {
    return (
      <p className="Synonyms">
        Synonyms:{" "}
        {props.synonyms.map(function (synonym, index) {
          console.log(props.word);
          return (
            <button key={index} onClick={lookUpSynonym}>
              {synonym}
            </button>
          );
        })}
      </p>
    );
  } else {
    return null;
  }
}
