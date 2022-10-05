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
//-----------LEVEL 1--------
export function getLevel1() {
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
      const criminalsFlat = criminals.map((criminal) => criminal.items).flat();
      const level1 = criminalsFlat.filter(
        (criminal) =>
          criminal.title !== null &&
          criminal.subjects !== null &&
          criminal.eyes_raw !== null &&
          criminal.hair_raw !== null &&
          criminal.race_raw !== null &&
          criminal.sex !== null &&
          criminal.weight !== null &&
          criminal.dates_of_birth_used !== null &&
          criminal.description !== null &&
          criminal.occupations !== null
      );
      console.log("PAYLOAD LEVEL1", level1);
      return dispatch({ type: action.LOAD_LEVEL1, payload: level1 });
    } catch (error) {
      console.log(error, "Error on getAllCriminals");
    }
  };
}
