import React from "react";
import { Image } from "react-bootstrap";

function EachProjects({ link, image, title, desc }) {
  return (
    <>
      <a href={link} target="_blank">
        <div className="project_cards">
          <Image
            src={image}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
          <div className="card__content">
            <p className="card__title">{title}</p>
            <p className="card__description">{desc}</p>
          </div>
        </div>
      </a>
    </>
  );
}

export default EachProjects;
