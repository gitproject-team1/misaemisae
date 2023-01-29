import React from "react";

const expressionChange = (pmgrade) => {
  return pmgrade ? (
    [
      <i className="fa-regular fa-face-smile"></i>,
      <i className="fa-regular fa-face-meh"></i>,
      <i className="fa-regular fa-face-frown"></i>,
      <i className="fa-regular fa-face-dizzy"></i>,
    ][pmgrade - 1]
  ) : (
    <i className="fa-regular fa-face-meh-blank"></i>
  );
};

export default expressionChange;
