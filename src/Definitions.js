export default function Definitions(props) {
  console.log(props);
  return props.definitions.definitions.map(function (definition, index) {
    return <p key={index}>{definition.definition}</p>;
  });
}
