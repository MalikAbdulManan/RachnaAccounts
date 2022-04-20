const express = require("express");
const { check } = require("express-validator");

const adminController = require("../controllers/student-controllers");

const router = express.Router();

router.get("/", adminController.getadmin);

router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email")
      .normalizeEmail() // Test@test.com => test@test.com
      .isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  adminController.signup
);

router.post("/login", adminController.login);

module.exports = router;
