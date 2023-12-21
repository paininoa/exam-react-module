import { useEffect, useState } from "react";
import PersonCard from "./PersonCard";
const apiKey = import.meta.env.VITE_API_KEY;

export default () => {
  const [persons, setPersons] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  // console.log(persons);
  // console.log(errorMessage);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((obj) => setPersons(obj.results))
      .catch((error) => {
        console.error(error);
        setErrorMessage("Something went wrong. Try again!");
      });
  }, []);

  return (
    <div>
      <h1>React module exam</h1>

      {errorMessage && (
        <div className="error-wrapper">
          <strong>{errorMessage}</strong>
        </div>
      )}
      {!errorMessage && (
        <div className="cards-wrapper">
          {persons &&
            persons.map((p, i) => {
              return (
                <PersonCard
                  key={`person ${i}`}
                  name={p.name}
                  occupation={p.known_for_department}
                  sex={p.gender === 1 ? "F" : "M"}
                  popularity={p.popularity}
                  works={p.known_for.map((movie, i) => {
                    <li key={`known_movie${i}`}>{movie.title}</li>;
                  })}
                  imagePath={`https://image.tmdb.org/t/p/w500${p.profile_path}`}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};
