const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.get("/", async (request, response) => {
  try {
    const users = await User.find({})
    response.send(users);
  } catch (error) {
    next(error);
  }
});

usersRouter.post("/", async (request, response, next) => {
  const body = request.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);
  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  });
  try {
    if (body.password.length < 3) {
      return response
        .status(400)
        .json({ error: "password should be longer than 3" });
    } else {
      const savedUser = await user.save();
      return response.json(savedUser);
    }
  } catch (error) {
    console.log("catch working");
    next(error);
  }
});

module.exports = usersRouter;
