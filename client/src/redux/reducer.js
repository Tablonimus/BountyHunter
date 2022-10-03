import * as action from "../redux/actions/actionTypes";

const initialState = {
  allCriminals: [],
  rewardCriminals: [],
  correctAnswer: {},
  incorrectAnswer1: {},
  IncorrectAnswer2: {},
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

    case action.GET_CORRECT_ANSWER: {
      return {
        ...state,
        correctAnswer: payload,
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
