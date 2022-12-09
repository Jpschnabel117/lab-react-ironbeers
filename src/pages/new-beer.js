import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Newbeer() {
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const updateState = (event) =>
    setState({ ...state, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: state.name,
        tagline: state.tagline,
        description: state.description,
        first_brewed: state.first_brewed,
        brewers_tips: state.brewers_tips,
        attenuation_level: Number(state.attenuation_level),
        contributed_by: state.contributed_by,
      })
      .then((axiosResponse) => {
        console.log(axiosResponse.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" value={state.name} onChange={updateState} />
        <label>Tagline:</label>
        <input name="tagline" value={state.tagline} onChange={updateState} />
        <label>Description:</label>
        <input
          name="description"
          value={state.description}
          onChange={updateState}
        />
        <label>First Brewed:</label>
        <input
          name="first_brewed"
          value={state.first_brewed}
          onChange={updateState}
        />
        <label>Brewer Tips:</label>
        <input
          name="brewers_tips"
          value={state.brewers_tips}
          onChange={updateState}
        />
        <label>Attenuation Level:</label>
        <input
          name="attenuation_level"
          value={state.attenuation_level}
          onChange={updateState}
          type="number"
        />
        <label>Contributed by:</label>
        <input
          name="contributed_by"
          value={state.contributed_by}
          onChange={updateState}
        />
        <button>List Beer</button>
      </form>
    </div>
  );
}

export default Newbeer;
