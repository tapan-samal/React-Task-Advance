import React, { useEffect, useRef, useState } from "react";
import "./otp-generate.css";

const OtpGenerate = () => {
  const otpSize = 6;
  const [otp, setOtp] = useState(new Array(otpSize).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  const handleInputChange = (event, index) => {
    const value = event.target.value.trim();

    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < otpSize - 1) {
      inputRef.current[index + 1]?.focus();
    }
  };

  const handleOnKeyDown = (event, index) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      event.preventDefault();
      inputRef.current[index - 1]?.focus();
    }
  };

  return (
    <>
      <h1>OTP Generator</h1>
      <div className="otp-container">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            className="otp-input"
            value={digit}
            onChange={(event) => handleInputChange(event, index)}
            onKeyDown={(event) => handleOnKeyDown(event, index)}
            ref={(el) => (inputRef.current[index] = el)}
            maxLength={1}
            inputMode="numeric"
            autoComplete="one-time-code"
          />
        ))}
      </div>
    </>
  );
};

export default OtpGenerate;
