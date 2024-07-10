import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/Home.css';

const Home = () => {
    const navigate = useNavigate()
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [animation, setAnimation] = useState("");
    const [addClass, setAddClass] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);

    const questions = [
        "What is your Question 1?",
        "What is your Question 2?",
        "What is your Question 3?",
    ];

    const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

    const handleNavigation = (direction) => {
        const newIndex = currentQuestion + direction;
        if (newIndex >= 0 && newIndex < questions.length) {
            setAnimation("slide-out-up");
            setTimeout(() => {
                setCurrentQuestion(newIndex);
                setSelectedOption(null);
                setAnimation("slide-in-up");
            }, 500);
        }
    };

    const optionChecked = () => {
        if (!selectedOption) {
            setAddClass("bounce-animation");
            setTimeout(() => setAddClass(""), 1000);
        } else {
            handleNavigation(1);
        }
    };
    const update = () => {
        if (!selectedOption) {
            setAddClass("bounce-animation");
            setTimeout(() => setAddClass(""), 1000);
        } else {
            navigate("/loading");
        }
    };

    return (
        <section className="homeMainDiv">
            <main className={`mainDiv ${animation}`}>
                <div className="questionContainer">
                    <div className="question">
                        <span>{currentQuestion + 1}. </span>
                        <p>{questions[currentQuestion]}</p>
                    </div>
                    <div className={`optionsMainDiv ${addClass}`}>
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className={`option ${selectedOption === option ? "selectedOption" : ""}`}
                                onClick={() => setSelectedOption(option)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                    <div className="buttons">
                        <div className="flex">
                            <button
                                onClick={optionChecked}
                                className={`nextButtonBtn ${!selectedOption ? "disabled" : ""}`}
                            >
                                Next
                            </button>
                            {currentQuestion === questions.length - 1 && (
                                <button
                                    onClick={update}
                                    className="submitButton"
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                        <div className="flex">
                            <button
                                className="navButton prevButton"
                                onClick={() => handleNavigation(-1)}
                                disabled={currentQuestion === 0}
                            >
                                {"<"}
                            </button>
                            <button
                                className="navButton nextButton"
                                onClick={() => handleNavigation(1)}
                                disabled={currentQuestion === questions.length - 1}
                            >
                                {">"}
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Home;
