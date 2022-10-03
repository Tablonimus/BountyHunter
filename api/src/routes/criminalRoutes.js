const { Router } = require("express");
const sequelize = require("sequelize");
const axios = require("axios");
const router = Router();
//Controllers
const { getFBIcriminals } = require("../controllers/criminalControllers");

router.get("/", async (req, res) => {
  try {
    //const getCriminals = await getFBIcriminals();
    //

    console.log("ENTRANDO");
    // const dataFBI = await axios.get("https://api.fbi.gov/wanted/v1/list");//---
    // console.log("saliendo");

    // console.log(dataFBI.data.items);
    res.status(201).json("data");
    // res.status(200).json("PRUEBA")

    // if (title)
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
