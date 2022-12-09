import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Beers from "./pages/beers";
import Randombeers from "./pages/random-beer";
import Newbeer from "./pages/new-beer";
import Home from "./pages/home";
import Beerdetails from "./pages/beerdetails";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
      </header>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/beers/random" element={<Randombeers />} />
          <Route path="/beers/new" element={<Newbeer />} />
          <Route path="/beers/:beerId" element={<Beerdetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
