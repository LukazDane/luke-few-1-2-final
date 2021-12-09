import data from "../../metal.json";
import React from "react";

var len = Object.keys(data).length;

function MetalMeta() {
  return (
    <div>
      <h1>Bands: {len}</h1>
    </div>
  );
}

export default MetalMeta;
