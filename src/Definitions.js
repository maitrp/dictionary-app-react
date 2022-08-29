import Examples from "./Examples";

export default function Definitions(props) {
  console.log(props);
  return props.definitions.definitions.map(function (definition, index) {
    console.log(definition.example);
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
