import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import PersonCard from "./PersonCard";
const apiKey = import.meta.env.VITE_API_KEY;

export default () => {
  const [searchedActors, setSearchedActors] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  console.log({ searchedActors });
  console.log({ errorMessage });

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
      <h2>Search Page</h2>
      <SearchBar onSearch={search} />

      <div className="cards-wrapper">
        {searchedActors.map((a, i) => {
          return (
            <>
              <PersonCard
                key={`actor_search_${i}`}
                // id,
                name={a.name}
                occupation={a.known_for_department}
                sex={a.gender}
                popularity={a.popularity}
                //   works={[a.known_for]}
                imagePath={`https://image.tmdb.org/t/p/w500${a.profile_path}`}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};
