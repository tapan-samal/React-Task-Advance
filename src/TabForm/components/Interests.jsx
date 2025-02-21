import React from "react";

const Interests = ({ data, setData, error }) => {
  const { interests } = data;

  const handleInputInterests = (e) => {
    const { name, checked } = e.target;
    setData((prevState) => ({
      ...prevState,
      interests: checked
        ? [...prevState.interests, name]
        : prevState.interests.filter((item) => item !== name),
    }));
  };
  
  return (
    <div className="interests-tab">
      <h2> Interests </h2>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleInputInterests}
          />{" "}
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="sports"
            checked={interests.includes("sports")}
            onChange={handleInputInterests}
          />{" "}
          Sports
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="cooking"
            checked={interests.includes("cooking")}
            onChange={handleInputInterests}
          />{" "}
          Cooking
        </label>
      </div>
      {error.interests && <span className="error-message">{error.interests}</span>}
    </div>
  );
};

export default Interests;
