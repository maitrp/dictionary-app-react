export default function Examples(props) {
  console.log(props);
  if (props.examples === undefined) {
    return null;
  } else {
    return (
      <p>
        <em>Example: {props.examples}</em>
      </p>
    );
  }
}
