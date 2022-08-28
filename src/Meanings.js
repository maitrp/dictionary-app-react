import Definitions from "./Definitions";

export default function Meanings(props) {
  console.log(props);
  return (
    <div className="Meanings">
      {props.meanings.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <h3>{meaning.partOfSpeech}</h3>
            <Definitions definitions={meaning} />
          </div>
        );
      })}
    </div>
  );
}
