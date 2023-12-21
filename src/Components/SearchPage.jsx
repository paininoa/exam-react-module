import { useState, useEffect, useContext } from "react";
import SearchBar from "./SearchBar";
import PersonCard from "./PersonCard";
import LangContext from "./LangContext";
const apiKey = import.meta.env.VITE_API_KEY;

export default () => {
  const [searchedActors, setSearchedActors] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const lang = useContext(LangContext);
  const trad = {
    "en-US": {
      title: "Search Page",
    },
    "it-IT": {
      title: "Pagina di ricerca",
    },
  };

  const search = async (searchValue) => {
    const searchParams = new URLSearchParams({
      api_key: apiKey,
      query: searchValue,
    });
    const response = await fetch(
      `https://api.themoviedb.org/3/search/person?${searchParams.toString()}`
    );
    if (!response.ok) {
      console.log(response);
      setErrorMessage("No person found. Try again!");
      return;
    }
    const { results } = await response.json();
    setSearchedActors(results);
  };

  return (
    <div>
      <h2>{trad[lang].title}</h2>
      <SearchBar onSearch={search} />

      {errorMessage && (
        <p>
          <strong>{errorMessage}</strong>
        </p>
      )}
      {!errorMessage && (
        <div className="cards-wrapper">
          {searchedActors.map((a, i) => {
            return (
              <>
                <PersonCard
                  key={`actor_search_${i}`}
                  id={a.id}
                  name={a.name}
                  occupation={a.known_for_department}
                  sex={a.gender === 1 ? "F" : "M"}
                  popularity={a.popularity}
                  works={a.known_for.map((movie, i) => (
                    <li key={`known_work${i}`}>{movie.title}</li>
                  ))}
                  imagePath={`https://image.tmdb.org/t/p/w500${a.profile_path}`}
                />
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};
