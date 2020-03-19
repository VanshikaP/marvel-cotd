import React from "react";

const Card = ({ seriesName, character }) => {
  return (
    <div className={`character-container ${seriesName}`}>
      <img
        src={character.thumbnail.path + "." + character.thumbnail.extension}
        className="character-img"
        alt={character.name}
      />
      <div className="character-info">
        <h2 className="character-name"> {character.name} </h2>
        <p className="character-description"> {character.description}</p>
      </div>
    </div>
  );
};

export default Card;
