const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Criminal",
    {
      // id: {
      //     type: DataTypes.STRING(3),
      //     unique: true,
      //     primaryKey: true,
      //     allowNull: false,
      //   },
      title: {
        type: DataTypes.STRING,

        unique: true,
      },
       reward_text: {
        type: DataTypes.STRING,
      },
      //   aliases: { type: DataTypes.ARRAY }, //array?
      // images: { type: DataTypes.ARRAY },
      // subjects: { type: DataTypes.ARRAY },
      // languages: { type: DataTypes.ARRAY },
    //   publication: { type: DataTypes.STRING }, //STRING
    //   warning_message: { type: DataTypes.STRING }, //StrinG
    //   url: { type: DataTypes.STRING }, //string
    //   description: { type: DataTypes.STRING }, //STR
    //   details: { type: DataTypes.STRING }, //STR
    //   caution: { type: DataTypes.STRING }, //STR
    //   remarks: { type: DataTypes.STRING }, //STR
    //   additional_information: { type: DataTypes.STRING }, //string
    //   nationality: { type: DataTypes.STRING }, //str
    //   files: { type: DataTypes.STRING }, //STR
    //   person_classification: { type: DataTypes.STRING }, //STR//que es victima o main
    //   sex: { type: DataTypes.STRING }, //STRI
    //   scars_and_marks: { type: DataTypes.STRING }, //STR
    //   age: { type: DataTypes.STRING },
    //   weight: { type: DataTypes.STRING }, //STR
    //   height: { type: DataTypes.NUMBER }, //num
    //   hair: { type: DataTypes.STRING }, //STR
    //   eyes: { type: DataTypes.STRING }, //STR
    //   race: { type: DataTypes.STRING }, //STR
    //   localcreated: { type: DataTypes.STRING },
      //   age_min: {}, //NUM
      //   age_max: {}, //numbre
      //   age_range: {}, //STR
      //   weight_min: {}, //numb
      //   height_min: {}, //num
      //   height_max: {}, //NUM
      //   hair_raw: {}, //STR
     //   weight_max: {}, //NUM
       //   race_raw: {}, //STR
      //   eyes_raw: {}, //STR
    },
    { timestamps: false }
  );
};
