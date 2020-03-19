import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import Card from "./Card";

import {
  fetchCharacterList,
  fetchCharacter,
  setCharacterName
} from "../actions";

const Character = props => {
  return (
    <div>
      <div className="series-btn-container">
        <button
          className={`series btn ${
            props.seriesName === "avengers" ? ` avengers` : ""
          }`}
          onClick={() => props.fetchCharacterList("avengers")}
        >
          Avengers
        </button>
        <button
          className={`series btn ${
            props.seriesName === "x-men" ? ` x-men` : ""
          }`}
          onClick={() => props.fetchCharacterList("x-men")}
        >
          X-Men
        </button>
      </div>

      {!props.isLoading && props.charactersList && (
        <button
          className="character btn"
          onClick={() => {
            props.setCharacterName();
            props.characterName
              ? props.fetchCharacter(props.characterName)
              : props.fetchCharacter(props.charactersList[0]);
          }}
        >
          Get Character
        </button>
      )}
      {props.isLoading ||
        (props.isCharacterLoading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        ))}
      {!props.isCharacterLoading && props.character && (
        <Card seriesName={props.seriesName} character={props.character} />
      )}
      {!props.isCharacterLoading && !props.character && props.characterName && (
        <div className={`character-container ${props.seriesName}`}>
          <h2 className="character-name">{props.characterName}</h2>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    isCharacterLoading: state.isCharacterLoading,
    seriesName: state.seriesName,
    charactersList: state.charactersList,
    characterName: state.characterName,
    character: state.character,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  { fetchCharacterList, fetchCharacter, setCharacterName }
)(Character);
