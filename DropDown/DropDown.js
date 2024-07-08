import React, { useState } from "react";
import "./drop-down.css";

const DropDown = () => {
  const countries = [
    {
      name: "India",
      states: [
        { name: "Odisha", cities: ["Baleswar", "Bhubaneswar", "Rourkela"] },
        { name: "West Bengal", cities: ["Kolkata", "Kharagpur", "Digha"] },
        { name: "Maharashtra", cities: ["Mumbai", "Pune", "Nashik"] },
        { name: "Uttar Pradesh", cities: ["Lucknow", "Varanasi", "Noida"] },
      ],
    },
    {
      name: "Australia",
      states: [
        { name: "New South Wales", cities: ["Sydney", "Newcastle", "Wollongong"] },
        { name: "Queensland", cities: ["Brisbane", "Gold Coast", "Cairns"] },
        { name: "South Australia", cities: ["Adelaide", "Mount Gambier", "Whyalla"] },
        { name: "Tasmania", cities: ["Hobart", "Launceston", "Devonport"] },
      ],
    },
    {
      name: "USA",
      states: [
        {name: "California", cities: ["Los Angeles", "San Francisco", "San Diego"]},
        { name: "Texas", cities: ["Houston", "Dallas", "Austin"] },
        { name: "New York", cities: ["New York City", "Buffalo", "Rochester"] },
        { name: "Florida", cities: ["Miami", "Orlando", "Tampa"] },
      ],
    },
  ];

  const [country, setCountry] = useState("");
  const [stateList, setStateList] = useState([]);
  const [state, setState] = useState("");
  const [cityList, setCityList] = useState([]);
  const [city, setCity] = useState("");
  const [submittedData, setSubmittedData] = useState(null); // New state variable for submitted data

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setCountry(selectedCountry);

    const selectedCountryData = countries.find((c) => c.name === selectedCountry);
    if (selectedCountryData) {
      setStateList(selectedCountryData.states);
      setState("--State--");
      setCityList([]);
      setCity("--City--");
    }
  };

  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setState(selectedState);

    const selectedStateData = stateList.find((s) => s.name === selectedState);
    if (selectedStateData) {
      setCityList(selectedStateData.cities);
      setCity("--City--");
    }
  };

  const handleSubmit = () => {
    if (country && state && city) {
      setSubmittedData({ country, state, city });
    } else {
      alert("Please select options from all dropdowns!");
    }
  };

  return (
    <div className="dropdown-container">
      <h1>Select Country, State and City</h1>
      <select className="select" value={country} onChange={handleCountryChange}>
        <option>--Country--</option>
        {countries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      <br />
      <select className="select" value={state} onChange={handleStateChange}>
        <option>--State--</option>
        {stateList.map((state, index) => (
          <option key={index} value={state.name}>
            {state.name}
          </option>
        ))}
      </select>
      <br />
      <select
        className="select"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        <option>--City--</option>
        {cityList.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
      <br />
      <button className="dropdown-btn" onClick={handleSubmit}>
        Submit
      </button>

      {/* Display submitted data */}
      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <div>Country: {submittedData.country}</div>
          <div>State: {submittedData.state}</div>
          <div>City: {submittedData.city}</div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
