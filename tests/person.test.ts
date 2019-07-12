import { Person } from "../src/person"

describe("Person tests", () => {
    test("Check person creation", () => {
        let expectedName = "Jhon";
        let expectedAge = 40;
        let person = new Person(expectedName, expectedAge);
        expect(person.getName()).toBe(expectedName);
        expect(person.getAge()).toBe(expectedAge);
    });

    test("Check person setters", () => {
        let name = "Jhon";
        let age = 40;
        let person = new Person(name, age);
        person.setName("Jhon Doe");
        person.setAge(41);
        expect(person.getName()).toBe("Jhon Doe");
        expect(person.getAge()).toBe(41);
    });

    test("Check person exceptions", () => {
        let person = new Person("Jhon", 1);
        expect(() => { person.setName("") }).toThrowError(new Error("Name cannot be empty"));
        expect(() => { person.setAge(-1) }).toThrowError(new Error("Age must be greater than 0"));
    });

})