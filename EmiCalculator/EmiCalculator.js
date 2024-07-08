import React, { useState } from "react";
import "./emi-cal.css";

const EmiCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [interest, setInterest] = useState("");
  const [year, setYear] = useState("");
  const [emi, setEmi] = useState(0);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "p") {
      setPrincipal(value);
    } else if (id === "i") {
      setInterest(value);
    } else {
      setYear(value);
    }
  };

  const handleCalculateEmi = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interest) / (12 * 100);
    const n = parseFloat(year) * 12;
    if (p && r && n) {
      const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(emiValue.toFixed(2));
    } else {
      alert("Enter input data!!");
    }
  };

  const handleResetInput = () => {
    setPrincipal("");
    setInterest("");
    setYear("");
    setEmi(0);
  };

  return (
    <div className="emi-container">
      <h1>EMI Calculator</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="p">Principal:</label>
        <input type="number" id="p" onChange={handleChange} value={principal} />
        <label htmlFor="i">Interest:</label>
        <input type="number" id="i" onChange={handleChange} value={interest} />
        <label htmlFor="y">Years:</label>
        <input type="number" id="y" onChange={handleChange} value={year} />{" "}
      </form>
      <div className="btn">
        <button onClick={handleCalculateEmi}>Calculate EMI</button>
        <button onClick={handleResetInput}>Reset</button>
      </div>
      <h2>Your EMI is {emi}</h2>
    </div>
  );
};

export default EmiCalculator;
