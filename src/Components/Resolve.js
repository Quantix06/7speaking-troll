import React from "react";
import image1 from "../Ressource/photo1.jpg"; 
import image2 from "../Ressource/photo2.jpg";
import image3 from "../Ressource/photo3.jpg";
import image4 from "../Ressource/photo4.jpg";
import image5 from "../Ressource/photo5.jpg";
import image6 from "../Ressource/photo6.jpg";
import image7 from "../Ressource/photo7.jpg";
import image8 from "../Ressource/photo8.jpg";
import "./Password.css";

const Resolve = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1 className="gallery-title">Découvrez l'invisible</h1>
      <div className="image-gallery">
        <img src={image1} alt="Image 1" />
        <img src={image2} alt="Image 2" />
        <img src={image3} alt="Image 3" />
        <img src={image4} alt="Image 4" />
        <img src={image5} alt="Image 5" />
        <img src={image6} alt="Image 6" />
        <img src={image7} alt="Image 7" />
        <img src={image8} alt="Image 8" />
      </div>
    </div>
  );
};

export default Resolve;
