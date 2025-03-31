import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Ressource/7speaking_logo.png";
import RickRollVideo from "../Ressource/RickRoll.mp4";

export default function LoginForm() {
  const [isRickRoll, setIsRickRoll] = useState(false);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const timer = useRef(null);

  useEffect(() => {
    timer.current = setTimeout(() => {
      setModal(true);
    }, 200000);

    return () => clearTimeout(timer.current);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setModal(false);

    const identifiant = event.target.identifiant.value;
    const password = event.target.password.value;

    if (identifiant === "shrek" && password === "shrek") {
      window.location.href = "https://user.7speaking.com/";
    } else if (identifiant === "7admin" && password === "7speaking") {
      navigate("/cesar");
    } else {
      alert("Identifiants incorrects. Veuillez réessayer.");
    }
  };

  return (
    <>
      {isRickRoll && (
        <div className="top-0 left-0 w-screen h-screen fixed z-50">
          <video
            className="h-full w-full object-cover"
            id="rick-roll-video"
            src={RickRollVideo}
            type="video/mp4"
            autoPlay
            loop
            muted
            controls
          />
        </div>
      )}
      {modal && (
        <>
          <div className="modal-bg">
            <div className="p-8 bg-white rounded-lg max-w-96">
              <p className="text-center">
                Vous êtes bien lent. Regardez dans le header du site !
              </p>
              <button
                className="primary-btn mt-4"
                onClick={() => setModal(false)}
              >
                D'accord
              </button>
            </div>
          </div>
        </>
      )}
      <div className="login-form-bg">
        <div className="p-8 bg-white rounded-lg w-96">
          <form
            className="flex flex-col items-center gap-4 w-full"
            onSubmit={handleSubmit}
          >
            <img className="w-24 h-24" src={Logo} alt="Logo" />
            <h2>Bienvenue</h2>
            <input
              type="text"
              id="identifiant"
              name="identifiant"
              placeholder="Votre adresse email"
              required
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Votre mot de passe"
              required
            />
            <label className="flex gap-2 items-center cursor-pointer">
              <input type="checkbox" />
              <p>Se souvenir de moi</p>
            </label>
            <a
              href="#"
              className="text-[var(--primary-red)] hover:underline"
              onClick={() => setIsRickRoll(true)}
            >
              Mot de passe oublié ?
            </a>
            <button type="submit" className="primary-btn">
              Se connecter
            </button>
            <p className="">Des difficultés pour vous connecter ?</p>
          </form>
        </div>
      </div>
    </>
  );
}
