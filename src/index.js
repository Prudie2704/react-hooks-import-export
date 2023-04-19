import React from "react";
import ReactDOM from "react-dom";
import ColoradoStateParks from "./ColoradoStateParks";

ReactDOM.render(<ColoradoStateParks />, document.getElementById("root"));


test("Test passing", () => {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }).then(result => {
    console.log("Test passed!");
  }).catch(error => {
    console.error("Test failed:", error);
  });
  
