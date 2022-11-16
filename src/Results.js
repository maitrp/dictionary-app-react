import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results.length === 0) {
    return null;
  } else {
    return (
      <div className="Results">
        <section>
          <h2>{props.results[0].word} </h2>
          <Phonetics
            phonetics={props.results[0].phonetics}
            pronunciation={props.results[0].word}
          />
        </section>
        {props.results.map(function (result, index) {
          return (
            <div key={index}>
              <Meanings
                meanings={result}
                setWord={props.setWord}
                search={props.search}
                word={props.word}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
