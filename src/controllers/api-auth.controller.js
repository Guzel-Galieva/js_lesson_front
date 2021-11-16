const { Router } = require("express");
const ErrorResponse = require("../classes/error-response");
const User = require("../dataBase/models/User.model");
const Token = require("../dataBase/models/Token.model");
const { asyncHandler } = require("../middlewares/middlewares");
const { nanoid } = require("nanoid");

const router = Router();

function initRoutes() {
  router.post("/registration", asyncHandler(userRegistration));
  router.post("/login", asyncHandler(userLogin));
}

async function userRegistration(req, res, next) {
  const userExisting = await User.findOne({
    where: {
      login: req.body.login,
    },
  });

  if (userExisting) {
    throw new ErrorResponse("User with this login already exist!", 406);
  }

  if (!req.body.password) {
    throw new ErrorResponse("Write password!", 406);
  }

  const user = await User.create(req.body);
  
  res.status(200).json(user);
}

async function userLogin(req, res, next) {
  const userExisting = await User.findOne({
    where: req.body,
  });

  if (!userExisting) {
    throw new ErrorResponse(
      "User with this login and password do not exist!",
      406
    );
  }

  const newToken = await Token.create({
    userId: userExisting.id,
    value: nanoid(128),
  });

  res.status(200).json({
    accessToken: newToken.value,
  });
}

initRoutes();

module.exports = router;
