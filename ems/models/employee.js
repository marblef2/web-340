//Required items
let mongoose = require("mongoose");
let Schema = mongoose.Schema;

//Defining the EmployeeSchema

let employeeSchema = new Schema({
    firstName: String,
    lastName: String
});

//Employee Model

let Employee = mongoose.model("Employee", employeeSchema);

//Exporting the Employee model.

module.exports = Employee;