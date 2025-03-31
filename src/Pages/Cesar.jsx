import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Ressource/7speaking_logo.png";
import email from "../Ressource/email.json";



export default function Cesar() {
    return (
      <>
        <div style={{ margin: 0, padding: 0, backgroundColor: "#F5F5F8" }}>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
            borderBottom: "1px solid #eee",
            backgroundColor: "white",
            fontFamily: "sans-serif",
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
  
        <main style={{ display: "flex", width: "100%", padding: "20px" }}>
        <div
            className="column"
            style={{
                width: "50%",
                height: "100%",
                boxSizing: "border-box",
                borderRadius: "8px",
                backgroundColor: "white",
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
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
                borderBottomLeftRadius: "8px",
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
                    borderTopLeftRadius: "8px",
                    borderBottomLeftRadius: "8px",
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
              height: "100%",
              boxSizing: "border-box",
              borderRadius: "8px",
              padding: "20px",
            }}
          >
            <p>Contenu de la colonne droite</p>
          </div>
        </main>
        </div>
      </>
    );
  }