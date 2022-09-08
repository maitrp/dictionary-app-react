import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length !== 0) {
    return (
      <p className="Synonyms">
        Synonyms:{" "}
        {props.synonyms.map(function (synonym, index) {
          return <button key={index}>{synonym}</button>;
        })}
      </p>
    );
  } else {
    return null;
  }
}
