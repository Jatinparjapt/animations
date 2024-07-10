import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
const Loading = () => {
  const navigate = useNavigate()
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const loadingText = [
    "loading",
    "processing request",
    "Gathering data"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(prevIndex => {
        if (prevIndex < loadingText.length - 1) {
          return prevIndex + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            
            navigate("/success")
          }, 1000);
          return prevIndex;
        }
      });
    }, 1000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`loadingMainDiv`}>
      <div className='loadingTextDiv' >
        {currentTextIndex < loadingText.length ? (
          <p>{loadingText[currentTextIndex]}</p>
        ) : null}
        {currentTextIndex < loadingText.length && <div className="loader"></div>}
      </div>
    </div>
  );
};

export default Loading;
