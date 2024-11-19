import React, { useState } from "react";
import "./select-box.css";

const SelectCheckBox = () => {
    const checkbox = {check1: false, check2: false, check3: false, check4: false, check5: false};

    const [checkboxes, setCheckboxes] = useState(checkbox);
    const [error, setError] = useState("");

    const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
      setCheckboxes({ ...checkboxes, [name]: checked });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const selectedCheckboxes =
        Object.values(checkboxes).filter(Boolean).length;
      // console.log("Check", selectedCheckboxes);
      if (selectedCheckboxes < 3) {
        setError("Must select at least three checkboxes!");
      } else {
        setError("");
        alert("Task Achieved!");
      }
    };

  return (
    <>
      <div className="box-container">
        <h1>Select Check Box</h1>
        <form className="box-element" onSubmit={handleSubmit}>
          <div className="check-box">
            <label htmlFor="box1">CheckBox 1</label>
            <input id = "box1" type="checkbox" name="check1" value={checkboxes.check1} onChange={handleCheckboxChange}/>
          </div>
          <div className="check-box">
            <label htmlFor="box2">CheckBox 2</label>
            <input id = "box2" type="checkbox" name="check2" value={checkboxes.check2} onChange={handleCheckboxChange}/>
          </div>
          <div className="check-box">
            <label htmlFor="box3">CheckBox 3</label>
            <input id = "box3" type="checkbox" name="check3" value={checkboxes.check3} onChange={handleCheckboxChange}/>
          </div>
          <div className="check-box">
            <label htmlFor="box4">CheckBox 4</label>
            <input id = "box4" type="checkbox" name="check4" value={checkboxes.check4} onChange={handleCheckboxChange}/>
          </div>
          <div className="check-box">
            <label htmlFor="box5">CheckBox 5</label>
            <input id = "box5" type="checkbox" name="check5" value={checkboxes.check5} onChange={handleCheckboxChange}/>
          </div>
          <button type="submit">Submit</button>
          {error && <div style={{color:'yellow'}}>{error}</div>}
        </form>
      </div>
    </>
  );
};

export default SelectCheckBox;
