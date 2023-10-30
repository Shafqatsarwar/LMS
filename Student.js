"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Person_1 = require("./Person");
class Student extends Person_1.Person {
    constructor(first_name, last_name, age, email) {
        super(first_name, last_name, age);
        this.email = email;
    }
    getFullName() {
        return this.first_name + ' ' + this.last_name;
    }
}
exports.Student = Student;
