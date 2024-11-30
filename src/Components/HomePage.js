import React from "react";
import "./homepage.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import text  from '../Ressource/email.json';
import planet_rap from "../Ressource/planet_rap.jpg"



const createElement = (Element, attributes = {}, childrenArray = []) => {
    const tempElement = document.createElement(Element);
  
    Object.entries(attributes).forEach((item) => {
      const [key, value] = item;
      tempElement[key] = value;
    });
  
    childrenArray?.forEach((child) => {
      tempElement.append(child);
    });
  
    return tempElement;
  };
function NewPage(id, password) {
//  if (id == "bob.fraudster@ecole52.com" && password == "ILoveMoney69!") {
 if (id == "admin52" && password == "Admin52!") {

    AveCesar();
  } else if (id == "shrek" && password == "shrek") {
    window.location.href =
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
  } else {
    alert("Wrong password or login");
  }
}
function AveCesar() {
  const appDiv = document.querySelector("#kc-header");
    appDiv.nextElementSibling.remove();
  appDiv.style.textAlign = "center";
    appDiv.style.padding = "20px";
    appDiv.style.borderRadius = "10px";
  const h1Cesar = createElement("h1", { innerHTML: "Ave Cesar" });
  appDiv.append(h1Cesar);

  const cesarImg = createElement("img", {
    src: "https://e1.pxfuel.com/desktop-wallpaper/425/638/desktop-wallpaper-julius-caesar-png-transparent-julius-caesar-png-julius-caesar.jpg",
    alt: "cesar",
    style: "width: 150px; height: auto; border-radius: 8px; margin-bottom: 20px;"
  });
  appDiv.append(cesarImg);
  const cesarmessage = createElement("p", { innerHTML: text.text });
  appDiv.append(cesarmessage);

}

const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div id="kc-header"></div>
        <div id="kc-content">
          <div id="kc-content-wrapper">
            <div id="kc-form">
              <img
                id="logo"
                src={planet_rap}
                alt="42 logo"
                style={{
                  width: "300px",
                  height: "300px",
                  marginBottom: "20px",
                }}
              />
              <div id="kc-form-wrapper">
                <div className="input-group">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Login or email"
                    autoFocus
                    autoComplete="off"
                    className="input-field"
                  />
                </div>
                <div className="input-group">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    className="input-field"
                  />
                </div>
                <div id="kc-form-buttons">
                  <input
                    className="submit-button"
                    name="login"
                    id="kc-login"
                    type="submit"
                    value="Sign In"
                    onClick={() =>
                      NewPage(
                        document.getElementById("username").value,
                        document.getElementById("password").value
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};


export default HomePage;
