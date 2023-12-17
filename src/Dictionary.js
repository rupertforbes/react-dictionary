import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response);
    console.log(response.data.meanings[0].definition);
    setResults(response);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=b5a70e3dbaf3379o5576fffe161ca0t4`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} className="search-input">
        <input
          type="search"
          autoFocus={true}
          onChange={handleKeywordChange}
          placeholder="Enter a word..."
        />
      </form>
      <Results results={results} />
    </div>
  );
}
