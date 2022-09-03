/*
- class is a blueprint which is used to create the object.

class contains following things
-----------------------------------------
1) Fields / Properties : Variables declared in class.
2) Methods : To perform action
3) Nested Class : A class can contain another class
4) Constructor : It is used to initialized the objects
5) Objects : Physical item or collection of properties

-------------------------------------------
Syntax to declare class :
class <class-name>{
    // fields
    // methods
}

- "new" keyword is used to create object.

--------------------------------------------
Constructors :
- constructor is used to initialize the object.
- constructor name will be same as class name.
- In constructor , we can access class members using this keyword.
- constructor can take arguments , didn't return anything.
******
- In Typescript constructor does not support for overloading : means class can have only 1 constructor , not many.
- In Typescript we will use 'constructor' keyword to define the constructor.

*/
var Student = /** @class */ (function () {
    function Student(studentName, studentMark, studentRank) {
        this.studentName = studentName;
        this.studentMarks = studentMark;
        this.studentRank = studentRank;
    }
    Student.prototype.getStudentGrade = function () {
        if (this.studentMarks >= 75) {
            return "A";
        }
        else if (this.studentMarks >= 65 && this.studentMarks < 60) {
            return "B";
        }
        else {
            return "C";
        }
    };
    return Student;
}());
var s1 = new Student("Harsh", 40, 3); // Object Creation
// s1.studentName = "Harsh";
// s1.studentMarks = 40;
// s1.studentRank = 3;
console.log(s1.getStudentGrade());
var s2 = new Student("Harsh2", 80, 2); // Object Creation
// s2.studentName = "Harsh2";
// s2.studentMarks = 80;
// s2.studentRank = 2;
console.log("Grade : " + s2.getStudentGrade());
