import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import LangContext from "./LangContext";
const apiKey = import.meta.env.VITE_API_KEY;

export default () => {
  const { id } = useParams();
  const [person, setPerson] = useState([]);
  const [message, setMessage] = useState("");
  console.log({ person });

  const lang = useContext(LangContext);
  const trad = {
    "en-US": {
      sex: "Sex:",
      occupation: "Occupation:",
      age: "Age:",
    },
    "it-IT": {
      sex: "Sesso:",
      occupation: "Occupazione:",
      age: "Età:",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=${lang}`
    )
      .then((response) => response.json())
      .then((obj) => setPerson(obj))
      .catch((error) => {
        console.error(error);
        setMessage("No person found");
      });
  }, [lang]);

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

            <div>
              <p>
                <strong>{trad[lang].age}</strong>
              </p>
              <p>{person.birthday}</p>
            </div>

            <div>
              <p>
                <strong>{trad[lang].sex}</strong>
              </p>
              <p>{person.gender === 1 ? "F" : "M"}</p>
            </div>

            <div>
              <p>
                <strong>{trad[lang].occupation}</strong>
              </p>
              <p>{person.known_for_department}</p>
            </div>

            <p>{person.biography}</p>
          </div>
        </div>
      )}
    </div>
  );
};
