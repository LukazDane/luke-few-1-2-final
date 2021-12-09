import data from "../../metal.json";
import React from "react";

function BandSplit() {
  return data.map((band) => {
    return (
      <div className="band-wrapper">
        <h1>{band.band_name}</h1>
        <p>Origin: {band.origin}</p>
        <p>Fans: {band.fans}</p>
        <p>Formed: {band.formed}</p>
        <p>{band.style}</p>
        <p>Split: {band.split}</p>
      </div>
    );
  });
}
export default BandSplit;
