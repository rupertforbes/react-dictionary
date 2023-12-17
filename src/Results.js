import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    console.log(props.results);
    return (
      <div className="Results mt-4">
        <h1 className="mb-3">{props.results.data.word}</h1>
        {props.results.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
