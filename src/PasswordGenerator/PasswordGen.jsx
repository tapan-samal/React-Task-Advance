import React, { useState } from "react";
import "./password-gen.css";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(10);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpclChars, setIncludeSpclChars] = useState(true);

  const handlePasswordGen = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const spclChars = "@#$%&*()^?/|";

    let validChars = "";
    if (includeUppercase) {
      validChars += uppercase;
    }
    if (includeLowercase) {
      validChars += lowercase;
    }
    if (includeNumbers) {
      validChars += numbers;
    }
    if (includeSpclChars) {
      validChars += spclChars;
    }

    let genPassword = "";
    if (validChars === "") {
      alert("Select atleast one option !!");
    } else {
      for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        genPassword += validChars[randomIndex];
      }
      setPassword(genPassword);
    }
  };
  return (
    <div className="container">
      <h1>Password Generator</h1>
      <div>
        <label>Password Length : </label> &nbsp;
        <input
          type="number"
          style={{ width: "50px" }}
          value={passwordLength}
          max={12} min={6}
          onChange={(e) => setPasswordLength(e.target.value)}
        />
      </div>
      <div>
        <label>Include Uppercase : </label>
        <input
          type="checkbox"
          className="check-box"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
        />
      </div>
      <div>
        <label>Include Lowercase :</label>
        <input
          type="checkbox"
          className="check-box"
          checked={includeLowercase}
          onChange={() => setIncludeLowercase(!includeLowercase)}
        />
      </div>
      <div>
        <label>Include Numbers :</label>
        <input
          type="checkbox"
          className="check-box"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
      </div>
      <div>
        <label>Include Special Characters :</label>
        <input
          type="checkbox"
          className="check-box"
          checked={includeSpclChars}
          onChange={() => setIncludeSpclChars(!includeSpclChars)}
        />
      </div>
      <button onClick={handlePasswordGen}>Generate Password</button>
      <div style={{display:'flex', gap:'15px'}}>
        <h3>Display Password :</h3>
        <input type="text" value={password} readOnly style={{padding:'8px', maxWidth:'160px', height:'26px'}} />
      </div>
    </div>
  );
};

export default PasswordGenerator;
