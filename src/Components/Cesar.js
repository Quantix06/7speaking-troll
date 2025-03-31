import React, { useState } from 'react';

const Cesar = () => {
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
      const cesarImg = createElement("img", {
        src: "https://e1.pxfuel.com/desktop-wallpaper/425/638/desktop-wallpaper-julius-caesar-png-transparent-julius-caesar-png-julius-caesar.jpg",
        alt: "cesar",
        style: "width: 150px; height: auto; border-radius: 8px; margin-bottom: 20px;"
      });
      
    return (
        <div className="password"/>
    );
};

export default Cesar;