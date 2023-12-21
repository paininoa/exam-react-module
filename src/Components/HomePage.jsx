import { useContext, useEffect, useState } from "react";
import PersonCard from "./PersonCard";
import LangContext from "./LangContext";
const apiKey = import.meta.env.VITE_API_KEY;

export default () => {
  const [persons, setPersons] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const lang = useContext(LangContext);

  const trad = {
    "en-US": {
      title: "React module exam",
    },
    "it-IT": {
      title: "Esame modulo React",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/person/day?api_key=${apiKey}&language=${lang}`
    )
      .then((response) => response.json())
      .then((obj) => setPersons(obj.results))
      .catch((error) => {
        console.error(error);
        setErrorMessage("Something went wrong. Try again!");
      });
  }, []);

  return (
    <div>
      <h1>{trad[lang].title}</h1>

      {errorMessage && (
        <div className="error-wrapper">
          <strong>{errorMessage}</strong>
        </div>
      )}
      {!errorMessage && (
        <div className="cards-wrapper">
          {persons &&
            persons.map((p, i) => (
              <PersonCard
                key={`person ${i}`}
                id={p.id}
                name={p.name}
                occupation={p.known_for_department}
                sex={p.gender === 1 ? "F" : "M"}
                popularity={p.popularity}
                works={p.known_for.map((movie, i) => (
                  <li key={`known_movie${i}`}>{movie.title}</li>
                ))}
                imagePath={`https://image.tmdb.org/t/p/w500${p.profile_path}`}
              />
            ))}
        </div>
      )}
    </div>
  );
};
