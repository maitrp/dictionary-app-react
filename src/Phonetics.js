import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props);

  let phoneticAudio = props.phonetics.find(function (phonetic) {
    return phonetic.audio !== "";
  });

  let phoneticText = props.phonetics.find(function (phonetic) {
    return phonetic.text !== undefined;
  });

  let audioCount = props.phonetics.filter(function (phonetic) {
    return phonetic.audio !== "";
  });

  function playPronunciation() {
    new Audio(phoneticAudio.audio).play();
  }

  if (props.phonetics.length === 0) {
    return null;
  } else if (audioCount.length === 0) {
    return <h3>{phoneticText.text}</h3>;
  } else {
    return (
      <h3 className="Phonetics">
        <span
          title={`${props.pronunciation} pronunciation`}
          onClick={playPronunciation}
          className="material-symbols-outlined speaker-icon"
        >
          volume_up
        </span>
        {phoneticText.text}
      </h3>
    );
  }
}
