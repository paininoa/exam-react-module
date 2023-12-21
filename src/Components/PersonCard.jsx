import { Link } from "react-router-dom";

export default ({
  id,
  name,
  occupation,
  sex,
  popularity,
  works,
  imagePath,
}) => {
  return (
    <Link to={`/person/${id}`} className="card">
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w500${imagePath}`}
          alt={`image ${name}`}
        />
      </figure>

      <div className="card-content">
        <h3>{name}</h3>
        <h4>{`Occupation: ${occupation}`}</h4>
        <p>{`Sex: ${sex}`}</p>
        <p>{`Popularity: ${popularity}`}</p>
        <ul>{`Known for: ${works}`}</ul>
      </div>
    </Link>
  );
};
