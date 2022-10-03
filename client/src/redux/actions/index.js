import * as action from "../actions/actionTypes";
import axios from "axios";
//------------GET CRIMINALS-------------------
export function getAllCriminals() {
  return async function (dispatch) {
    try {
      const nPage = 49;
      const links = [];
      for (let i = 1; i <= nPage; i++) {
        links.push(`https://api.fbi.gov/wanted/v1/list?page=${i}`);
      }

      const promisedLinks = links.map(async (link) => await axios.get(link));

      const dataFBI = await Promise.all(promisedLinks);
      const criminals = dataFBI.map((criminals) => criminals.data).flat();
      const payload = criminals.map((criminal) => criminal.items).flat();

      return dispatch({ type: action.GET_ALL_FBI, payload: payload });
    } catch (error) {
      console.log(error, "Error on getAllCriminals");
    }
  };
}
//-----------REWARDS FILTER---------------
export function getRewardCriminals() {
  return async function (dispatch) {
    try {
      const nPage = 49;
      const links = [];
      for (let i = 1; i <= nPage; i++) {
        links.push(`https://api.fbi.gov/wanted/v1/list?page=${i}`);
      }

      const promisedLinks = links.map(async (link) => await axios.get(link));

      const dataFBI = await Promise.all(promisedLinks);
      const criminals = dataFBI.map((criminals) => criminals.data).flat();
      const payload = criminals.map((criminal) => criminal.items).flat();
      const payloadReward = payload.filter(
        (crimi) =>
          crimi?.reward_text?.length >
          0 /* && crimi?.subjects?.includes("Kidnappings") */
      );

      return dispatch({ type: action.GET_REWARD_FBI, payload: payloadReward });
    } catch (error) {
      console.log(error, "Error on getAllCriminals");
    }
  };
}
//-----------CORRECT ANSWER--------
export function getCorrectAnswer(correctAnswer) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: action.GET_CORRECT_ANSWER,
        payload: correctAnswer,
      });
    } catch (error) {
      console.log(error, "Error on getCorrectAnswer");
    }
  };
}

export function getIncorrectAnswer1(inccorrectAnswer1) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: action.GET_INCORRECT1_ANSWER,
        payload: inccorrectAnswer1,
      });
    } catch (error) {
      console.log(error, "Error on getCorrectAnswer");
    }
  };
}
export function getIncorrectAnswer2(inccorrectAnswer2) {
  return async function (dispatch) {
    try {
      return dispatch({
        type: action.GET_INCORRECT2_ANSWER,
        payload: inccorrectAnswer2,
      });
    } catch (error) {
      console.log(error, "Error on getCorrectAnswer");
    }
  };
}


