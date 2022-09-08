import "./Examples.css";

export default function Examples(props) {
  if (props.examples === undefined) {
    return null;
  } else {
    return (
      <p className="Examples">
        <em>Example: {props.examples}</em>
      </p>
    );
  }
}
