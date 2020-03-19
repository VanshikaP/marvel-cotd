export const initialCharacterState = {
  isLoading: false,
  isCharacterLoading: false,
  seriesName: "",
  charactersList: null,
  characterName: "",
  character: null,
  error: ""
};

export const reducer = (state = initialCharacterState, action) => {
  switch (action.type) {
    case "FETCHING_CHARACTERS_LIST":
      return {
        ...state,
        isLoading: true
      };
    case "FETCHING_CHARACTER_LIST_SUCCESS":
      return {
        ...state,
        isLoading: false,
        charactersList: action.payload.charactersList,
        seriesName: action.payload.seriesName,
        character: null,
        characterName: null
      };
    case "SET_CHARACTER_NAME":
      return {
        ...state,
        characterName:
          state.charactersList[
            Math.floor(Math.random() * state.charactersList.length)
          ]
      };
    case "FETCHING_CHARACTER":
      return {
        ...state,
        isCharacterLoading: true
      };
    case "FETCHING_CHARACTER_DATA_SUCCESS":
      return {
        ...state,
        isCharacterLoading: false,
        character: action.payload
      };
    default:
      return state;
  }
};
