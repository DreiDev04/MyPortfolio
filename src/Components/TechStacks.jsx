import "../Styles/About.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import bootstrapIco from "../Icons/bootstrap-svgrepo-com.svg";
import csharpIco from "../Icons/csharp-svgrepo-com.svg";
import ccs3Ico from "../Icons/css-3-svgrepo-com.svg";
import figmaIco from "../Icons/figma-svgrepo-com.svg";
import html5Ico from "../Icons/html-5-svgrepo-com.svg";
import javaIco from "../Icons/java-svgrepo-com.svg";
import javascriptIco from "../Icons/javascript-svgrepo-com.svg";
import jqueryIco from "../Icons/jquery-svgrepo-com.svg";
import reactIco from "../Icons/react-svgrepo-com.svg";
import reduxIco from "../Icons/redux-svgrepo-com.svg";
import sassIco from "../Icons/sass-svgrepo-com.svg";
import unityIco from "../Icons/unity-svgrepo-com.svg";

function TechStacks() {
  const icons = [
    html5Ico,
    ccs3Ico,
    javascriptIco,
    bootstrapIco,
    csharpIco,
    figmaIco,
    javaIco,
    jqueryIco,
    reactIco,
    reduxIco,
    sassIco,
    unityIco,
  ];
  const iconName = [
    "HTML",
    "CSS",
    "JavaScript",
    "Bootstrap",
    "C#",
    "Figma",
    "Java",
    "jQuery",
    "React",
    "Redux",
    "Sass",
    "Unity",
  ];

  const chunkSize = 3;
  const iconChunks = [];
  const iconNames = [];
  for (let i = 0; i < icons.length; i += chunkSize) {
    iconChunks.push(icons.slice(i, i + chunkSize));
    iconNames.push(iconName.slice(i, i + chunkSize));
  }

  return (
    <div className="m-5" >
      <h1 className="d-flex justify-content-center my-5 display-4" id="TechStack">
        Tech Stacks
      </h1>
      <Carousel indicators={false}>
        {iconChunks.map((iconGroup, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex flex-row justify-content-center gap-5 bg-transparent">
              {iconGroup.map((icon, iconIndex) => (
                <div key={iconIndex} className="card">
                  <div className="card-info">
                    <img
                      src={icon}
                      alt={`Tech Icon ${index * chunkSize + iconIndex}`}
                      className="htmlIMG"
                    />
                    <p className="title">
                      {iconName[index * chunkSize + iconIndex]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default TechStacks;
