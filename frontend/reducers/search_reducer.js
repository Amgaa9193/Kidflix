import { merge } from "lodash";

const searchReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case "RECIEVE_SEARCH_RESULT":
      return action.results;

    default:
      return oldState;
  }
};

export default searchReducer;
