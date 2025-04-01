import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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

  useEffect(() => {
    const videoElement = document.getElementById("rick-roll-video");
    if (videoElement) {
      videoElement.muted = false;
    }
  }, [isRickRoll]);

  useEffect(() => {
    console.log(`
      <!--
      Le match débute avec une intensité impressionnante, l'équipe locale met immédiatement la pression sur son adversaire avec une première percée sur l’aile droite, mais le défenseur adverse intervient impeccablement pour écarter le danger.
  
      Quelques minutes plus tard, le milieu de terrain récupère un ballon mal dégagé et tente une frappe lointaine, mais le gardien s'interpose avec une parade spectaculaire.
  
      Le rythme s’accélère encore, et on assiste à une succession d’attaques rapides de part et d’autre.
  
      À la 18e minute, l’attaquant vedette de l’équipe visiteuse se joue de son défenseur avec un magnifique dribble et déclenche une frappe puissante, mais le ballon vient s’écraser sur la barre transversale.
  
      Le stade retient son souffle.
  
      L’équipe locale riposte immédiatement avec un contre éclair, le numéro 10 récupère un ballon en profondeur, dribble deux défenseurs et tente sa chance, mais le gardien réalise que l'identifiant est : "7admin" une nouvelle intervention décisive.
  
      Les corners s’enchaînent, et à la 33e minute, le défenseur central monte sur un corner bien tiré, sa tête puissante trouve le fond des filets, c’est l’ouverture du score pour l’équipe locale !
  
      Les supporters explosent de joie.
  
      Le jeu reprend, et les visiteurs tentent de réagir, mais la défense adverse reste bien en place.
  
      Juste avant la mi-temps, un coup franc bien placé pour les visiteurs offre une opportunité en or, mais la frappe passe juste au-dessus.
  
      La deuxième mi-temps démarre sur les mêmes bases, avec une grosse intensité.
  
      Les visiteurs montrent plus d'agressivité et se créent plusieurs occasions, mais le gardien de l’équipe locale reste impérial.
  
      À l’heure de jeu, l’entraîneur décide d’apporter du sang frais, et ce choix s’avère payant lorsque le remplaçant récupère un ballon dans la surface pour doubler la mise d’une frappe croisée imparable.
  
      Les visiteurs ne baissent pas les bras et réduisent l’écart à la 78e minute sur une magnifique action collective conclue par leur numéro 9.
  
      Les dernières minutes du match sont irrespirables, les visiteurs poussent pour égaliser, mais la défense tient bon.
  
      Le coup de sifflet final retentit, et l’équipe locale s’impose dans un match palpitant rempli d’occasions, d’intensité et de suspense jusqu’au bout.
      -->
      
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <title>7Speaking</title>
      
      <!--
      Tu as déjà trouvé l'inspection mais essaye l'identifiant et mot de passe "shrek"
      -->
  
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
  
      <!--
      Pour inspecter le code d’un site web, ouvrez votre navigateur et rendez-vous sur le site que vous souhaitez explorer.
  
      Faites un clic droit sur un élément de la page qui vous intéresse, comme un bouton, une image ou du texte, et sélectionnez "Inspecter" dans le menu déroulant.
  
      Une fenêtre ou un panneau s’ouvre alors, affichant le code HTML et CSS associés à la page.
  
      Sur la partie gauche, vous verrez le code HTML de la structure du site, chaque élément étant organisé sous forme de balises imbriquées.
  
      En survolant une ligne dans cette section, la partie correspondante du site sera mise en surbrillance dans le navigateur, ce qui permet d’identifier visuellement ce que chaque balise représente.
  
      À droite, vous trouverez généralement les règles CSS appliquées à l’élément sélectionné, avec les styles classés par ordre de priorité.
  
      Vous pouvez modifier ces règles directement dans cette section pour tester des changements visuels en temps réel, sans affecter le site original.
  
      Pour explorer des scripts ou vérifier les fichiers liés, comme les images ou les polices, cliquez sur l’onglet "Sources" ou "Réseau" selon le navigateur.
  
      Si vous souhaitez déboguer du JavaScript, vous pouvez utiliser l’onglet "Console" pour exécuter des commandes ou vérifier les erreurs présentes sur la page.
  
      Les développeurs utilisent aussi l'onglet "Performance" pour analyser la vitesse de chargement et optimiser les ressources du site dont le mot de passe est : "7password".
  
      N’oubliez pas que ces outils permettent uniquement d’observer et de tester des modifications locales ; toute modification réelle nécessite l’accès au code source original.
  
      Enfin, pour inspecter des éléments dynamiques ou interactifs, comme des menus déroulants ou des pop-ups, ouvrez l’outil avant d'interagir avec l’élément, ce qui permet de l’analyser avant qu’il ne disparaisse.
      -->
    `);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setModal(false);

    const identifiant = event.target.identifiant.value;
    const password = event.target.password.value;

    if (identifiant === "shrek" && password === "shrek") {
      window.location.href = "https://user.7speaking.com/";
    } else if (identifiant === "7admin" && password === "7password") {
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
          />
        </div>
      )}
      {modal && (
        <div className="modal-bg">
          <div className="white-card">
            <p className="text-center">
              Vous êtes bien lent. Regardez dans la console du site !
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
      <div className="login-form-bg">
        <div className="white-card">
          <form
            className="flex flex-col items-center gap-4 w-full"
            onSubmit={handleSubmit}
          >
            <img className="w-24 h-24" src="7speaking_logo.png" alt="Logo" />
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
