import axios from "axios";

export const fetchCharacterList = series => {
  return dispatch => {
    dispatch({ type: "FETCHING_CHARACTERS_LIST" });

    axios
      .get(
        `https://gateway.marvel.com/v1/public/series?titleStartsWith=${series}&limit=100&ts=1&apikey=d8348761bbd844420407f2eb041de192&hash=d202b8bad8f757223f717fda3e73b5c5`
      )
      .then(response => {
        let characterArray = [];
        let arr = response.data.data.results.map(series =>
          series.characters.items.map(character => character.name)
        );
        for (let i = 0; i < arr.length; i++) {
          characterArray.push(...arr[i]);
        }
        characterArray = [...new Set(characterArray)];

        dispatch({
          type: "FETCHING_CHARACTER_LIST_SUCCESS",
          payload: {
            seriesName: series,
            charactersList: characterArray
          }
        });
      })
      .catch(err => console.log(err.message));
  };
};

export const setCharacterName = () => {
  return dispatch => {
    dispatch({ type: "SET_CHARACTER_NAME" });
  };
};
export const fetchCharacter = name => {
  return dispatch => {
    console.log("Character", name);

    dispatch({ type: "FETCHING_CHARACTER" });

    axios
      .get(
        `https://gateway.marvel.com/v1/public/characters?name=${name}&ts=1&apikey=d8348761bbd844420407f2eb041de192&hash=d202b8bad8f757223f717fda3e73b5c5`
      )
      .then(response => {
        console.log(response.data.data);
        dispatch({
          type: "FETCHING_CHARACTER_DATA_SUCCESS",
          payload: response.data.data.results[0]
        });
      })
      .catch(err => console.log(err));
  };
};

// const characterName =
//   characterArray[Math.floor(Math.random() * characterArray.length)];
// console.log("Character", characterName);
// dispatch({ type: 'FETCHING_DATA_SUCCESS', payload: characterName})
//   axios
//     .get(
//       "https://gateway.marvel.com/v1/public/characters/1009368?ts=1&apikey=d8348761bbd844420407f2eb041de192&hash=d202b8bad8f757223f717fda3e73b5c5"
//     )
//     .then(response => {
//       console.log(response.data.data);
//       dispatch({
//         type: "FETCHING_DATA_SUCCESS",
//         payload: response.data.data.results[0]
//       });
//     })
//     .catch(err => console.log(err));
// };
// };
