var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    name: String
});

var Employee = mongoose.model("ems", employeeSchema);

module.exports = Employee;