const Sequelize = require("sequelize");
const { sequelize } = require("..");

class ToDo extends Sequelize.Model {}

ToDo.init(
  {
    id: {
      type: Sequelize.DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.DataTypes.UUIDV4,
    },
    title: {
      type: Sequelize.STRING,
      defaultValue: "Title",
    },
    description: {
      type: Sequelize.STRING,
      defaultValue: "Description",
    },
    isCompleted: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    isFavourite: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    priority: {
      type: Sequelize.SMALLINT,
      defaultValue: 1,
    },
  },
  { sequelize: sequelize, underscored: true, modelName: "todo" }
);

// const Comment = require("./Comment.model");

// ToDo.hasMany(Comment);
// Comment.belongsTo(ToDo, { foreignKey: "ToDoId" });

module.exports = ToDo;
