import Meanings from "./Meanings";

export default function Results(props) {
  console.log(props.results);
  if (props.results.length === 0) {
    return null;
  } else {
    return (
      <div className="Results">
        <h2>{props.results[0].word} </h2>
        {props.results.map(function (result, index) {
          return (
            <div key={index}>
              <Meanings meanings={result} />
            </div>
          );
        })}
      </div>
    );
  }
}
