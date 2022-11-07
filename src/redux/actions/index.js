import * as action from "../actions/actionTypes";
import axios from "axios";
import { bindActionCreators } from "redux";
//------------GET CRIMINALS------not used-------------
export function getAllCriminals() {
  return async function (dispatch) {
    try {
      const nPage = 30;
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
export function getRewardCriminals(input) {
  return async function (dispatch) {
    try {
      const nPage = 30;
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

      const getDbCriminals = await axios.get(
        "https://bounty-hunter-newapp.herokuapp.com/criminal"
      );
      const dbCriminals = getDbCriminals.data.reverse();
      const allCriminals = [dbCriminals, payloadReward];
      const searched = allCriminals
        .flat()
        .filter(
          (criminal) =>
            criminal.title?.toLowerCase().includes(input?.toLowerCase()) ||
            criminal.reward_text
              ?.toLowerCase()
              .includes(input?.toLowerCase()) ||
            criminal.subjects?.includes(input?.toLowerCase())
        );
      return dispatch({
        type: action.GET_REWARD_FBI,
        payload:
          input?.length === 0 || searched?.length > 0
            ? searched
            : allCriminals.flat(),
      });
    } catch (error) {
      console.log(error, "Error on getAllCriminals");
    }
  };
}

//-----------LEVEL 1--------
export function getLevel1() {
  return async function (dispatch) {
    try {
      const nPage = 30;
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

      return dispatch({ type: action.LOAD_LEVEL1, payload: level1 });
    } catch (error) {
      console.log(error, "Error on getAllCriminals");
    }
  };
}

//----------POST CHARACTER---------
export function postCharacter(payload) {
  return async function (dispatch) {
    try {
      let json = await axios.post(
        "https://bounty-hunter-newapp.herokuapp.com/criminal",
        payload
      );
      dispatch({
        type: action.POST_CRIMINAL,
        payload: json.data,
      });
      return "Criminal created";
    } catch (error) {
      return "Server Error, try again later";
    }
  };
}
//------------GET DETAIL---------
export function getDetail(title) {
  return async (dispatch) => {
    return await axios
      .get(`https://bounty-hunter-newapp.herokuapp.com/criminal/${title}`)
      .then((json) =>
        dispatch({ type: action.DETAIL_CRIMINAL, payload: json.data })
      )
      .catch((error) => console.log(error));
  };
}
