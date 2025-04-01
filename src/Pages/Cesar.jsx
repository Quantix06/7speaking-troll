import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import email from "../Ressource/email.json";
import Carousel from "../Components/Caroussel.jsx";
import JohnPork from "../Ressource/JohnPork.mp4";

export default function Cesar() {
  const [modal, setModal] = useState(false);
  const [adviceModal, setAdviceModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [isJohnPork, setIsJohnPork] = useState(false);
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const timer = useRef(null);
  const videoRef = useRef(null);

  const handleValidation = () => {
    if (answer.trim().toLowerCase() === "7Speaking Admin".toLowerCase()) {
      navigate("/resolve");
    } else {
      setModal(false);
      setErrorModal(true);
      setAnswer("");
    }
  };

  const handleClose = () => {
    setModal(false);
    setAnswer("");
  };

  useEffect(() => {
    timer.current = setTimeout(() => {
      setAdviceModal(true);
    }, 200000);

    console.log("Check le code césar !");

    return () => clearTimeout(timer.current);
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      if (isJohnPork) {
        videoElement.muted = false;
        videoElement.play().catch((err) => {
          console.error("Erreur lors de la lecture vidéo:", err);
        });
      } else {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    }
  }, [isJohnPork]);

  return (
    <>
      {modal && (
        <div className="modal-bg">
          <div className="white-card flex flex-col gap-4">
            <p className="text-center">Qui est l'auteur de ce texte ?</p>
            <form className="flex flex-col items-center gap-4 w-full">
              <input
                type="text"
                placeholder="Réponse"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <div className="flex gap-4 w-full">
                <button
                  className="secondary-btn"
                  onClick={handleClose}
                  type="button"
                >
                  Annuler
                </button>
                <button
                  className="primary-btn"
                  onClick={handleValidation}
                  type="submit"
                >
                  Valider
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {adviceModal && (
        <div className="modal-bg">
          <div className="white-card">
            <p className="text-center">
              Vous êtes bien lent. Ne serait-ce pas un code césar ?
            </p>
            <button
              className="primary-btn mt-4"
              onClick={() => setAdviceModal(false)}
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
      <video
        ref={videoRef}
        className={`object-cover absolute h-56 w-32 bottom-8 right-8 rounded-lg transition-all duration-1000 ease-in-out ${
          isJohnPork ? "translate-x-0" : "translate-x-[200%]"
        }`}
        src={JohnPork}
        type="video/mp4"
        preload="auto"
        loop
        muted
      />
      <div>
        <nav className="bg-white shadow-md shadow-gray-300/50 flex px-8 py-2 justify-between">
          <div className="flex gap-2 items-center">
            <div className="red-tag">7</div>
            <p>Code César</p>
          </div>

          <div className="flex gap-2 items-center">
            <div className="yellow-tag">3</div>
            <p>Cesar · 20min · 19:56</p>
          </div>

          <div className="flex gap-2 items-center">
            <button
              className="secondary-btn"
              onClick={() => setIsJohnPork(true)}
            >
              Processus d'étude
            </button>
            <button className="primary-btn" onClick={() => setModal(true)}>
              Réponse
            </button>
          </div>
        </nav>

        <main className="p-8 flex gap-8">
          <div className="column p-4 w-1/2 h-full bg-white rounded-lg border-none bg-none">
            <div
              className="cesarVideo overflow-hidden rounded-lg relative w-full"
              style={{
                paddingBottom: "56.25%",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/wlCRAwQ6vXc"
                title="YouTube video player"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
                allowFullScreen
              />
            </div>

            <p
              style={{ padding: "20px" }}
              dangerouslySetInnerHTML={{ __html: email.text }}
            />
          </div>
          <div className="column p-4 w-1/2 h-full bg-white rounded-lg">
            <Carousel />
          </div>
        </main>
      </div>
    </>
  );
}
