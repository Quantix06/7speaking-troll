import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import DoraMusic from "../Ressource/DoraMusic.mp3";
import TrollImg from "../Ressource/trollImg.png";

export default function EndingPage() {
  const [modal, setModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [answer, setAnswer] = useState("");
  const audioRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (answer.toLowerCase().trim() === "l'amour") {
      setModal(true);
      audioRef.current.play();
    } else {
      setErrorModal(true);
      setAnswer("");
    }
  };

  return (
    <>
      <audio ref={audioRef} src={DoraMusic} />
      {modal && (
        <div className="modal-bg">
          <div className="white-card">
            <p className="text-center">
              Bravo ! Vous êtes arrivé jusqu'au bout.
            </p>
            <button
              className="primary-btn mt-4"
              onClick={() => setModal(false)}
            >
              D'accord
            </button>
          </div>
        </div>
      )}
      {errorModal && (
        <div className="modal-bg">
          <div className="white-card flex flex-col gap-4">
            <p className="text-center">Mauvaise réponse !</p>
            <button
              className="primary-btn"
              onClick={() => setErrorModal(false)}
            >
              D'accord
            </button>
          </div>
        </div>
      )}
      <header>
        <Link to="/">
          <img src="7speaking_logo.png" alt="logo" className="h-12" />
        </Link>
        <h1>Pour terminer</h1>
      </header>
      <div className="min-h-screen flex justify-center">
        <div className="white-card flex flex-col gap-4 items-center h-fit mt-32">
          <h2>Qu'elle était le motif du meurtre ?</h2>
          <img src={TrollImg} className="object-cover rounded-lg w-full" />
          <p className="text-white">L'amour</p>
          <form className="w-full flex flex-col gap-4 items-center">
            <input
              type="text"
              placeholder="Entrez votre réponse"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <button
              type="submit"
              className="primary-btn"
              onClick={handleSubmit}
            >
              Valider
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
