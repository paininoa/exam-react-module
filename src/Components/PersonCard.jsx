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
    <div className="card">
      <h3>{name}</h3>
      <h4>{occupation}</h4>
      <p>{sex}</p>
      <p>{popularity}</p>
      <ul>{works}</ul>
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w500${imagePath}`}
          alt={`image ${name}`}
        />
      </figure>
    </div>
  );
};
