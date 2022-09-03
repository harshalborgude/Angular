"use strict";
exports.__esModule = true;
var Student_1 = require("./Student");
var School = /** @class */ (function () {
    function School() {
        this.students = [
            new Student_1.Student(101, "Harsh"),
            new Student_1.Student(102, "Harsh1"),
            new Student_1.Student(103, "Harsh2")
        ];
    }
    School.prototype.display = function () {
        for (var i in this.students) {
            console.log(this.students[i]);
        }
    };
    return School;
}());
var school = new School();
school.display();
