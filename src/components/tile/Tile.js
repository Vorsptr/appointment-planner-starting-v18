import React from "react";

export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {description &&
        Object.values(description).map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      <hr />
    </div>
  );
};
