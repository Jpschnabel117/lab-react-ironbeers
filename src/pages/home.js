import beersimg from "../assets/beers.png";
import newbeerimg from "../assets/new-beer.png";
import randombeerimg from "../assets/random-beer.png";
import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <img src={beersimg} alt="" style={{ width: "400px" }} />
      <Link to="/beers">
        <h2>All Beers</h2>
      </Link>
      <p>something something something</p>
      <img src={newbeerimg} alt="" style={{ width: "400px" }} />
      <Link to="/beers/random">
        <h2>Random Beer</h2>
      </Link>
      <p>something something something</p>
      <img src={randombeerimg} alt="" style={{ width: "400px" }} />
      <Link to="/beers/new">
        <h2>New Beer</h2>
      </Link>
      <p>something something something</p>
    </div>
  );
}

export default Home;
