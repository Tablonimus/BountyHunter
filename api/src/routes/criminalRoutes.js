const { Router } = require("express");
const sequelize = require("sequelize");
const axios = require("axios");
const router = Router();
const { getAllCriminals, postCriminal } = require("../controllers/criminalControllers");

router.get("/", async (req, res) => {
  try {
    const criminals = await getAllCriminals();
    res.status(201).json(criminals);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.post("/",async(req,res)=>{
  const {title, classification,gender,image,subjects,reward_text}= req.body;
  try {
    const criminal = await postCriminal(
      title, classification,gender,image,subjects,reward_text
    )
    res.status(201).json("Criminal created");
  } catch (error) {
    res.status(400).json(error.message);
  }
})

module.exports = router;
