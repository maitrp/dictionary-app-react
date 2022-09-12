import Definitions from "./Definitions";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  console.log(props);
  return (
    <div className="Meanings">
      {props.meanings.meanings.map(function (meaning, index) {
        return (
          <section key={index}>
            <h3>{meaning.partOfSpeech}</h3>
            <Definitions definitions={meaning} />
            <Synonyms
              synonyms={meaning.synonyms}
              setWord={props.setWord}
              search={props.search}
            />
          </section>
        );
      })}
    </div>
  );
}
