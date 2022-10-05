import * as action from "../redux/actions/actionTypes";

const initialState = {
  allCriminals: [],
  rewardCriminals: [],
  level1: [],

};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case action.GET_REWARD_FBI: {
      return {
        ...state,
        rewardCriminals: payload,
      };
    }
    case action.GET_ALL_FBI: {
      return {
        ...state,
        allCriminals: payload,
      };
    }

    case action.LOAD_LEVEL1: {
      return {
        ...state,
        level1: payload,
      };
    }
    case action.GET_INCORRECT1_ANSWER: {
      return {
        ...state,
        incorrectAnswer1: payload,
      };
    }
    case action.GET_INCORRECT2_ANSWER: {
      return {
        ...state,
        incorrectAnswer2: payload,
      };
    }

    default:
      return state;
  }
}
