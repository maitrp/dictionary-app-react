export default function Synonyms(props) {
  if (props.synonyms.length !== 0) {
    return (
      <p>
        Synonyms:{" "}
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}>{synonym} </span>;
        })}
      </p>
    );
  } else {
    return null;
  }
}
