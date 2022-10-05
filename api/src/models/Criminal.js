const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Criminal",
    {
      title: {
        type: DataTypes.STRING,

        unique: true,
      },
      classification: {
        type: DataTypes.STRING,
      },

      image: { type: DataTypes.STRING },
      gender: { type: DataTypes.STRING },
      subjects: { type: DataTypes.STRING },
      reward_text: { type: DataTypes.STRING },
    },
    { timestamps: false }
  );
};
