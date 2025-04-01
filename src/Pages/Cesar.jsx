import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import email from "../Ressource/email.json";
import Carousel from "../Components/Caroussel.jsx";

export default function Cesar() {
  const [modal, setModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

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
      <div>
        <nav className="bg-white shadow-md shadow-gray-300/50 flex p-2 justify-between">
          <div className="flex gap-2 items-center">
            <div className="red-tag">7</div>
            <p>Code César</p>
          </div>

          <div className="flex gap-2 items-center">
            <div className="yellow-tag">3</div>
            <p>Cesar · 20min · 19:56</p>
          </div>

          <div className="flex gap-2 items-center">
            <button className="secondary-btn">Processus d'étude</button>
            <button className="primary-btn" onClick={() => setModal(true)}>
              Réponse
            </button>
          </div>
        </nav>

        <main
          style={{
            display: "flex",
            width: "100%",
            padding: "20px",
            gap: "20px",
          }}
        >
          <div
            className="column"
            style={{
              width: "50%",
              overflowY: "auto",
              maxHeight: "calc(100vh - 110px)",
              boxSizing: "border-box",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          >
            <div
              className="cesarVideo"
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%", // 16:9 aspect ratio
                height: 0,
                overflow: "hidden",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
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
              ></iframe>
            </div>

            <p
              style={{ padding: "20px" }}
              dangerouslySetInnerHTML={{ __html: email.text }}
            />
          </div>
          <div
            className="column"
            style={{
              width: "50%",
              height: "calc(100vh - 110px)",
              boxSizing: "border-box",
              borderRadius: "8px",
              padding: "20px",
              backgroundColor: "white",
              borderRadius: "8px",
            }}
          >
            <h2>
              Les 4 étapes clés pour optimiser l'efficacité de votre
              apprentissage.
            </h2>

            <Carousel />
          </div>
        </main>
      </div>
    </>
  );
}
