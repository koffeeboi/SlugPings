import * as types from "../constants/DatabaseConstants";

const initialState = {

};

const database = (state = initialState, action) => {
  switch (action.type) {

    case (types): { 
      return {
        ...state,
        channelID: action.payload,
      }      
    }

    default:
      return state;
  }
}

export default database;