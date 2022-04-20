const uuid = require("uuid");
const { validationResult } = require("express-validator");
const Student = require("../models/student");
const HttpError = require("../models/http-error");
const generateToken = require("../util/jwt");

const getStudents = async (req, res, next) => {
  let students;
  try {
    students = await Student.find({}, "-password");
  } catch (error) {
    const err = new HttpError("Something went wrong, please try again");
    return next(err);
  }
  res.json({
    students: students.map((student) => student.toObject({ getters: true })),
  });
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data.", 422);
  }
  const { name, email, password } = req.body;
  let existingStudent;
  try {
    existingStudent = await Student.findOne({ email: email });
  } catch (error) {
    const err = new HttpError("something went wrong, please try again", 500);
    return next(err);
  }

  if (existingStudent) {
    const err = new HttpError("Email already exists", 422);
    return next(err);
  }

  const student = new Student({
    name,
    email,
    password,
    image:
      "https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257_960_720.png",
    // places: [],
  });

  try {
    await student.save();
  } catch (error) {
    const err = new HttpError("something went wrong, please try again", 500);
    return next(err);
  }

  res.status(201).send({
    id: student._id,
    name: student.name,
    email: student.email,
    image: student.image,
  });
};

const login = async (req, res, next) => {
  console.log("body", req.body);
  const { email, password } = req.body;
  let existingStudent;
  try {
    existingStudent = await Student.findOne({ email: email });
  } catch (error) {
    const err = new HttpError("something went wrong, please try again", 500);
    return next(err);
  }

  if (!existingStudent || existingStudent.password !== password) {
    const err = new HttpError(
      "Invalid email or password, could not log in",
      401
    );
    return next(err);
  }
  res.status(200).send({
    _id: existingStudent._id,
    email: existingStudent.email,
    name: existingStudent.name,
    // isAdmin: existingStudent.isAdmin,
    token: generateToken(existingStudent._id),
    // token: generateToken("12345678"),
  });
};

exports.getStudents = getStudents;
exports.signup = signup;
exports.login = login;
