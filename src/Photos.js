import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        {props.photos.map(function (photo, index) {
          return (
            <a
              href={photo.src.original}
              target="_blank"
              key={index}
              title={photo.alt}
              rel="noopener noreferrer"
            >
              <img src={photo.src.landscape} alt={photo.alt} />
            </a>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
