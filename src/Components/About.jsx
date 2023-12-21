import { useContext } from "react";
import LangContext from "./LangContext";

export default () => {
  const lang = useContext(LangContext);

  const trad = {
    "en-US": {
      title: "About",
      description: "This app has been created for the React module exam.",
    },
    "it-IT": {
      title: "Chi siamo",
      description: "App creata per esame sul modulo React",
    },
  };

  return (
    <div>
      <h2>{trad[lang].title}</h2>
      <p>{trad[lang].description}</p>
    </div>
  );
};
