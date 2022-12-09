import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function Randombeers() {
let { beerId } = useParams();
console.log(beerId);

const [beer, setBeer] = useState(null);

useEffect(() => {
  axios
    .get("https://ih-beers-api2.herokuapp.com/beers/random")
    .then((axiosresponse) => {
      setBeer(axiosresponse.data);
    })
    .catch((err) => console.log(err));
}, [beerId]);

return (
  <div style={{ display: "flex", flexDirection: "column" }}>
    {beer ? (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "600px",
          alignItems: "center",
        }}
      >
        <h1>Beer Details</h1>
        <div
          style={{
            height: "400px",
            width: "400px",
            backgroundImage: `url(${beer.image_url})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "450px",
          }}
        >
          <div>{beer.name}</div>
          <div>{beer.attenuation_level}</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "450px",
          }}
        >
          <div>{beer.tagline}</div>
          <div>{beer.first_brewed}</div>
        </div>
        <p>{beer.description}</p>
        <h4>{beer.contributed_by}</h4>
      </div>
    ) : (
      <p>loading beer details...</p>
    )}
  </div>
);
}

export default Randombeers;
