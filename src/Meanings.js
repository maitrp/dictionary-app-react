import Definitions from "./Definitions";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      {props.meanings.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <h3>{meaning.partOfSpeech}</h3>
            <Definitions definitions={meaning} />
            <Synonyms synonyms={meaning.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
