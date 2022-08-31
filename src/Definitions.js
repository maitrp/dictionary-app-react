import Examples from "./Examples";

export default function Definitions(props) {
  return props.definitions.definitions.map(function (definition, index) {
    return (
      <div key={index}>
        <p>
          {index + 1}. Definition: {definition.definition}
        </p>
        <Examples examples={definition.example} />
      </div>
    );
  });
}
