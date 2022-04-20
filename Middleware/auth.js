const jwt = require("jsonwebtoken");
const User = require("../models/user");
const httpError = require("../models/http-error");

const authenticate = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (er) {
      console.log("Error", er);
      // res.status(401);
      const error = new httpError("Not authorized, token failed", 401);
      next(error);
    }
  }

  if (!token) {
    // res.status(404);
    const error = new httpError("Not Authorized,no token", 401);
    next(error);
  }
};
module.exports = authenticate;
