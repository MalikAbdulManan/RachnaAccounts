const User = require("../models/user");
const HttpError = require("../models/http-error");
const generateToken = require("../util/jwt");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    console.log("error", error);
    const err = new HttpError("something went wrong, please try again", 500);
    return next(err);
  }
  if (!existingUser || existingUser.password !== password) {
    const err = new HttpError(
      "Invalid email or password, could not log in",
      401
    );
    return next(err);
  }

  res.status(200).send({
    employeeId: existingUser.employeeId,
    email: existingUser.email,
    name: existingUser.name,
    token: generateToken(existingUser._id),
  });
};

module.exports = { login };
