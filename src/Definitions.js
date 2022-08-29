export default function Definitions(props) {
  console.log(props);
  return props.definitions.definitions.map(function (definition, index) {
    return (
      <div key={index}>
        <p>{definition.definition}</p>
        <p>
          <em>Example: {definition.example}</em>
        </p>
      </div>
    );
  });
}
