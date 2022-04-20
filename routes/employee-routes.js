const express = require("express");
const auth = require("../Middleware/auth");
const employeeController = require("../controllers/employee-controller");

const router = express.Router();

//Get All Employees
router.get("/", employeeController.getEmployees);

//Get Single Employee
router.get("/:id", employeeController.getEmployee);

//Add Employee
router.post("/add", employeeController.addEmployee);

//Update Employee
router.patch("/:id", employeeController.updateEmployee);

//Delete Employee
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
