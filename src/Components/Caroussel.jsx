import React, { useState } from "react";
import Caroussel1 from "../Ressource/Caroussel1.png";
import Caroussel2 from "../Ressource/Caroussel2.png";
import Caroussel3 from "../Ressource/Caroussel3.png";
import Caroussel4 from "../Ressource/Caroussel4.png";
import { height, positions } from "@mui/system";

const steps = [
  {
    title: "Écoutez attentivement",
    content:
      "Formez-vous tout en vous informant ! L’actualité brûlante est traitée quotidiennement par notre équipe pédagogique, sous forme de cours vidéo ou d’articles audio. Écoutez au moins une fois le document sans lire le script ou les sous-titres. Réécoutez le document autant de fois que nécessaire pour en saisir toutes les subtilités orales et écrites.",
    image: Caroussel1,
  },
  {
    title: "Aidez-vous de la transcription",
    content:
      "Sélectionner l'intégralité du script à l'aide de Ctrl + A, ou en maintenant le clic et en faisant glisser la souris sur toute la page. ",
    image: Caroussel2,
  },
  {
    title: "Développez vos compétences",
    content:
      "Ouvre la fenêtre de ChatGPT dans un navigateur, puis colle le script précédemment copié. Inscris ensuite le prompt suivant : 'Aide-moi à répondre aux questions que je vais te poser à l'aide de ce script.'",
    image: Caroussel3,
  },
  {
    title: "Testez votre compréhension",
    content:
      "Pour chaque question, suivez les instructions suivantes : - Prenez une capture d’écran de votre réponse -Importez cette capture dans ChatGPT, puis appuyez sur Entrée -Suivez scrupuleusement les indications de l’IA, sans réfléchir par vous-même.",
    image: Caroussel4,
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const goPrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % steps.length);
  };

  const currentStep = steps[index];

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={{ marginBottom: 0 }}>{currentStep.title}</h2>

        {/* Zone image + flèches */}
        <div style={styles.imageWrapper}>
          {index !== 0 && (
            <button onClick={goPrev} style={styles.arrowLeft}>
              ←
            </button>
          )}

          <img
            src={currentStep.image}
            alt={currentStep.title}
            style={styles.image}
          />

          {index !== steps.length - 1 && (
            <button onClick={goNext} style={styles.arrowRight}>
              →
            </button>
          )}
        </div>

        <p style={{ width: "70%", textAlign: "left" }}>{currentStep.content}</p>
      </div>

      <div style={{ ...styles.nav, position: "relative", bottom: "10%" }}>
        <span>
          {index + 1} / {steps.length}
        </span>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    margin: "auto",
    textAlign: "center",
    fontFamily: "Arial",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  card: {
    padding: "20px",
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    maxWidth: "300px", // taille max image
    margin: "20px 0",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  arrowLeft: {
    position: "absolute",
    top: "50%",
    left: "-60%",
    transform: "translateY(-50%)",
    fontSize: "24px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  arrowRight: {
    position: "absolute",
    top: "50%",
    right: "-60%",
    transform: "translateY(-50%)",
    fontSize: "24px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    gap: "10px",
  },
};
