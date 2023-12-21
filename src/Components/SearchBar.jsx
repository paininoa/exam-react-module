import { useState } from "react";

export default ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="search-wrapper">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => onSearch(inputValue)}
        disabled={inputValue.trim() === "" ? true : false}
      >
        Search
      </button>
    </div>
  );
};
