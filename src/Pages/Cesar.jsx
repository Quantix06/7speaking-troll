import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Ressource/7speaking_logo.png";
import email from "../Ressource/email.json";
import Carousel from "../Components/Caroussel.jsx";



export default function Cesar() {

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "auto"; // reset au démontage
        };
      }, [])


    return (
      <>
        <div style={{ margin: 0, padding: 0, backgroundColor: "#F5F5F8", overflow: "hidden" }}>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            borderBottom: "1px solid #eee",
            backgroundColor: "white",
            fontFamily: "sans-serif",
            margin: "0",
          }}
        >
          <div className="left" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              className="badge"
              style={{
                backgroundColor: "#f43f5e",
                color: "white",
                fontWeight: "bold",
                padding: "6px 10px",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            >
              7
            </div>
            <span style={{ fontWeight: 500, fontSize: "16px" }}>Code César</span>
          </div>
  
          <div className="center" style={{ display: "flex", alignItems: "center", gap: "15px", fontSize: "14px", color: "#444" }}>
            <span
              className="yellow-tag"
              style={{
                backgroundColor: "#facc15",
                color: "white",
                padding: "2px 6px",
                borderRadius: "4px",
                fontSize: "12px",
              }}
            >
              3
            </span>
            <span>Cesar · 20min · 19:56</span>
          </div>
  
          <div className="right" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              className="study"
              style={{
                backgroundColor: "#facc15",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Processus d'étude
            </button>
            <button
              className="test"
              style={{
                backgroundColor: "#f43f5e",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Test d'incompréhension
            </button>
          </div>
        </nav>
  
        <main style={{ display: "flex", width: "100%", padding: "20px", gap: "20px" }}>
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
            <h2 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "20px", color: "#000", textAlign: "left", marginLeft:"10%" }}>
              Les 4 étapes clés pour optimiser l'efficacité de votre apprentissage.
            </h2>

            <Carousel />

          </div>
        </main>
        </div>
      </>
    );
  }