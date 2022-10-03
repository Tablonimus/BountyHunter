const axios = require("axios");
require("dotenv").config();

const { Criminal } = require("../db");

//GET FBI info from API
async function getFBIcriminals() {
  console.log("entro");

  const data = await axios.get("https://api.fbi.gov/wanted/v1/list");

  console.log("salgo");

  //Format fbi Data and work chill
  const criminalData = data.items.map( (criminal) => {
    return {
      title: criminal.title,
      reward: criminal.reward_text,
      //       reward_text: {
      //         type: DataTypes.STRING,
      //         allowNull: true,
      //       },
      //       aliases: { type: DataTypes.ARRAY }, //array?
      //       publication: { type: DataTypes.STRING }, //STRING
      //       warning_message: { type: DataTypes.STRING }, //StrinG
      //       url: { type: DataTypes.STRING }, //string-
      //       description: { type: DataTypes.STRING }, //STR
      //       details: { type: DataTypes.STRING }, //STR
      //       caution: { type: DataTypes.STRING }, //STR
      //       remarks: { type: DataTypes.STRING }, //STR
      //       additional_information: { type: DataTypes.STRING }, //string
      //       nationality: { type: DataTypes.STRING }, //str
      //       files: { type: DataTypes.STRING }, //STR
      //       images: { type: DataTypes.ARRAY },
      //       subjects: { type: DataTypes.ARRAY },
      //       languages: { type: DataTypes.ARRAY },
      //       person_classification: { type: DataTypes.STRING }, //STR//que es victima o main
      //       sex: { type: DataTypes.STRING }, //STRI
      //       scars_and_marks: { type: DataTypes.STRING }, //STR
      //       age: criminal.edad||
      //       weight: { type: DataTypes.STRING }, //STR
      //       height: { type: DataTypes.NUMBER }, //num
      //       hair: { type: DataTypes.STRING }, //STR
      //       eyes: { type: DataTypes.STRING }, //STR
      //       race: { type: DataTypes.STRING }, //STR
      //       localcreated: { type: DataTypes.STRING },
    };
  });

  console.log(criminalData, "CRIMINALDATA");
  return criminalData;
}

module.exports = { getFBIcriminals };
