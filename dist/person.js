"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(pName, pAge) {
        this.Name = pName;
        this.Age = pAge;
    }
    ;
    getName() {
        return this.Name;
    }
    getAge() {
        return this.Age;
    }
    setName(pName) {
        try {
            this.Name = pName;
        }
        catch (_a) {
            throw ('Error changing name');
        }
    }
    setAge(pAge) {
        if (pAge >= 0) {
            try {
                this.Age = pAge;
            }
            catch (_a) {
                throw ('Error changing age');
            }
        }
        else {
            throw ('Age must be greater than 0');
        }
    }
}
exports.Person = Person;
