const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const env = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
const usersRoutes = require("./routes/users-routes");
const employeesRoutes = require("./routes/employee-routes");

// env config
env.config();

// MongoDb connecting
connectDB();

// const studentsRoutes = require("./routes/student-routes");
const HttpError = require("./models/http-error");

const app = express();

// To resolve CORS issue
app.use(cors());

// content-type:json
app.use(bodyParser.json());

// User Routes
app.use("/api/login", usersRoutes);

// employee
app.use("/api/employee", employeesRoutes);

//Salary Routes
// app.use("/api/salary", salaryRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("Frontend/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "Frontend", "build", "index.html"))
  );
}

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`)
);
