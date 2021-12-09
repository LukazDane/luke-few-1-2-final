import data from "../../metal.json";
import React from "react";
import LikeCounter from "../LikeCounter/LikeCounter";
import "./Band.css";

function Band() {
  return data.map((band) => {
    return (
      <div className="band-wrapper">
        <h1>{band.band_name}</h1>
        <p>Origin: {band.origin}</p>
        <p>Fans: ({(band.fans * 1000).toLocaleString("en")})</p>
        <span>
          <p>Formed: {band.formed}</p>
        </span>
        <ul>
          {band.style[0] ? <li>{band.style.split(",", 1)[0]}</li> : null}
          {band.style.split(",") ? <li>{band.style.split(",")[1]}</li> : null}
          {band.style.split(",") ? <li>{band.style.split(",")[2]}</li> : null}
          {band.style.split(",") ? <li>{band.style.split(",")[3]}</li> : null}
          {band.style.split(",") ? <li>{band.style.split(",")[4]}</li> : null}
        </ul>
        {band.split === "-" ? <LikeCounter /> : "Split:" + band.split}
      </div>
    );
  });
}
export default Band;
