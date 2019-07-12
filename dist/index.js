"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
let user1 = new person_1.Person("User 1", 21);
let user2 = new person_1.Person("User 2", 22);
try {
    user1.setAge(22);
    user2.setAge(-1);
}
catch (error) {
    console.log(error);
}
