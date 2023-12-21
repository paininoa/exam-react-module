import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const apiKey = import.meta.env.VITE_API_KEY;

export default () => {
  const { id } = useParams();

  const [person, setPerson] = useState([]);
  const [message, setMessage] = useState("");
  console.log({ person });

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((obj) => setPerson(obj))
      .catch((error) => {
        console.error(error);
        setMessage("No person found");
      });
  }, []);

  return (
    <div>
      {id === undefined ? (
        <p>{message}</p>
      ) : (
        <div className="person-page-card">
          <figure>
            <img
              src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
            />
          </figure>

          <div className="person-page-content">
            <h2>{person.name}</h2>
            <p>{`Sex: ${person.gender === 1 ? "F" : "M"}`}</p>
            <p>{`Occupation: ${person.known_for_department}`}</p>
            <p>{person.biography}</p>
          </div>
        </div>
      )}
    </div>
  );
};
