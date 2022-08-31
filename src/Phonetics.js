export default function Phonetics(props) {
  console.log(props);

  let fullPhonetic = props.phonetics.find(function (phonetic) {
    return phonetic.text !== undefined && phonetic.audio !== "";
  });

  let halfPhonetic = props.phonetics.find(function (phonetic) {
    return phonetic.text !== undefined && phonetic.audio === "";
  });

  if (fullPhonetic !== undefined) {
    return (
      <h3>
        {fullPhonetic.audio} {fullPhonetic.text}
      </h3>
    );
  } else if (
    props.phonetics.filter(function (obj) {
      return obj.text === undefined;
    }).length > 0
  ) {
    return props.phonetics.map(function (phonetic, index) {
      return (
        <span key={index}>
          {phonetic.audio} {phonetic.text}
        </span>
      );
    });
  } else {
    return <h3>{halfPhonetic.text}</h3>;
  }
}
