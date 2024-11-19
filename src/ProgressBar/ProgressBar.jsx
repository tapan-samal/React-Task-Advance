import React, { useEffect, useRef, useState } from "react";
import "./progress-bar.css";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const intervalRef = useRef(null);

  const startProgress = () => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(intervalRef.current);
          setIsDownloading(false);
          return prev;
        }
      });
    }, 100);
  };

  const handleDownload = () => {
    if (progress === 100) return;
    if (isDownloading) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsDownloading(false);
    } else {
      setIsDownloading(true);
      startProgress();
    }
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="main">
      <h1>Progress Bar</h1>
      <div className="bar-container">
        <span style={{ width: `${progress}%` }}>{progress}%</span>
      </div>

      <button onClick={handleDownload}>
        {progress === 100
          ? "Download Completed"
          : isDownloading
          ? "Pause"
          : "Start Download"}
      </button>
    </div>
  );
};

export default ProgressBar;
