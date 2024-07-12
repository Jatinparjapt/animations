// ProgressBar.jsx
import React from 'react';
import '../Styles/Progress.css';

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="progressBarContainer">
      <div className="progressBar" style={{ width: `${progressPercentage}%` }}></div>
    </div>
  );
};

export default ProgressBar;
