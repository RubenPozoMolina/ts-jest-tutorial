import {Person} from "./person";

let user1 = new Person("User 1", 21);
let user2 = new Person("User 2", 22)

try {
    user1.setAge(22);
    user2.setAge(-1);    
} catch (error) {
    console.log(error)    
}