import data from "../../metal.json";
import React from "react";

function MetalMeta() {
  const obj = JSON.parse(data);
  return (
    <div>
      <h1>obj[0].band_name</h1>
    </div>
  );
}

export default MetalMeta;
