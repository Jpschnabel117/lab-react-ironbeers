import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";

function Beers() {
  //const [beers, setBeers] = useState([]);
  const [searchedBeers, setSearchedBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //   const searchList = (term) => {
  //     const searchedList = initialFoodList.filter((element) => {
  //       return element.name.toLowerCase().includes(term.toLowerCase());
  //     });
  //     setSearchedLIST(searchedList);
  //   };

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/search?q=" + searchTerm)
      .then((axiosresponse) => {
        setSearchedBeers(axiosresponse.data);
      })
      .catch((err) => console.log(err));
  }, [searchTerm]);

  return (
    <div>
      <h1> beers </h1>
      <div>
        <label>Search: </label>
        <input
          type="text"
          name="search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            //searchList(e.target.value);
          }}
        />
      </div>
      {searchedBeers.map((beer) => {
        return (
          <div style={{ display: "flex" }}>
            <div
              style={{
                height: "250px",
                width: "250px",
                backgroundImage: `url(${beer.image_url})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div>
              <Link to={`/beers/${beer._id}`}>
                <h3>{beer.name}</h3>
              </Link>
              <h4>{beer.tagline}</h4>
              <p>{beer.contributed_by}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
