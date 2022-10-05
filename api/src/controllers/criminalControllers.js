const axios = require("axios");
require("dotenv").config();

const { Criminal } = require("../db");

async function getAllCriminals() {
  try {
    const dbCriminals = await Criminal.findAll();
    const jsonCriminalsData = await Promise.all(
      dbCriminals.map(async (criminal) => criminal.toJSON())
    );

    return jsonCriminalsData;
  } catch (error) {
    throw new Error("getAllCriminals controller error");
  }
}

const postCriminal = async (
  title,
  classification,
  gender,
  image,
  subjects,
  reward_text
) => {
  try {
    const newCriminal = await Criminal.create({
      title,
      classification,
      gender,
      image,
      subjects,
      reward_text
    });
  } catch (error) {
    console.error(err);
  }
};

module.exports = { getAllCriminals, postCriminal };
