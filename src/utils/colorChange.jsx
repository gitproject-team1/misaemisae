import React from "react";

const colorChange = (pmgrade, setColor) => {
  if (pmgrade === "1") setColor("#1e64ee");
  else if (pmgrade === "2") setColor("#00d500");
  else if (pmgrade === "3") setColor("#f95a20");
  else if (pmgrade === "4") setColor("#e73532");
};

export default colorChange;
