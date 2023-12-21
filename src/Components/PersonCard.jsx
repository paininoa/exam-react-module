import { useContext } from "react";
import { Link } from "react-router-dom";
import LangContext from "./LangContext";

export default ({
  id,
  name,
  occupation,
  sex,
  popularity,
  works,
  imagePath,
}) => {
  const lang = useContext(LangContext);

  const trad = {
    "en-US": {
      occupation: "Occupation:",
      sex: "Sex:",
      popularity: "Popularyty:",
      known: "Known for:",
    },
    "it-IT": {
      occupation: "Occupazione:",
      sex: "Sesso:",
      popularity: "Popolarità:",
      known: "Lavori famosi:",
    },
  };

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
        <div>
          <h4>{trad[lang].occupation}</h4>
          <h4>{occupation}</h4>
        </div>

        <div>
          <p>{trad[lang].sex}</p>
          <p>{sex}</p>
        </div>

        <div>
          <p>{trad[lang].popularity}</p>
          <p>{popularity}</p>
        </div>

        <p>{trad[lang].known}</p>
        <ol>{works}</ol>
      </div>
    </Link>
  );
};
