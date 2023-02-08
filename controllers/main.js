const jwt = require("jsonwebtoken");

const { BadRequest } = require("../errors");

const login = async (req, res) => {
  //   console.log("login");
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequest("please provide email and password");
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, email }, process.env.SECRET_KEY, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user Created..", token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, ${req.user.email}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
