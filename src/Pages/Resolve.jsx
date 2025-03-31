import React from "react";
import Quiz from "../Data/quiz.json";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Resolve() {
  const [whichQuestion, setWhichQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [modal, setModal] = useState(false);

  const handleValidation = () => {
    if (!selectedAnswer) return;

    const correctAnswer = Quiz[whichQuestion].answers.find(
      (answer) => answer.isCorrect
    );

    if (selectedAnswer === correctAnswer.text) {
      if (whichQuestion < Quiz.length - 1) {
        setWhichQuestion(whichQuestion + 1);
        setSelectedAnswer("");
      } else {
        alert("Félicitations ! Vous avez terminé le quiz.");
      }
    } else {
      setModal(true);
    }
  };

  const closeModal = () => {
    setModal(false);
    setSelectedAnswer("");
    setWhichQuestion(0);
  };

  return (
    <>
      {modal && (
        <>
          <div className="modal-bg">
            <div className="white-card">
              <p className="text-center">Ce n'est pas la bonne réponse !</p>
              <button className="primary-btn mt-4" onClick={closeModal}>
                D'accord
              </button>
            </div>
          </div>
        </>
      )}
      <header>
        <Link to="/">
          <img src="7speaking_logo.png" alt="logo" className="h-12" />
        </Link>
        <h1>Traduisez les phrases suivantes</h1>
      </header>
      <div className="min-h-screen flex justify-center bg-[var(--light-grey)]">
        <div className="white-card flex flex-col gap-4 items-center h-fit mt-32">
          <h2>{Quiz[whichQuestion].original}</h2>
          <img
            src="https://lms.7speaking.com/nasimages/1800words/1865.jpg"
            alt="question"
            className="object-cover rounded-lg w-1/2"
          />
          {Quiz[whichQuestion].answers.map((answer, index) => {
            return (
              <button
                key={index}
                className={`answer-btn ${
                  selectedAnswer === answer.text
                    ? " border-[var(--primary-yellow)]"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedAnswer(answer.text)}
              >
                {answer.text}
              </button>
            );
          })}
          <button
            className="primary-btn"
            onClick={handleValidation}
            disabled={!selectedAnswer}
          >
            Valider
          </button>
        </div>
      </div>
    </>
  );
}
