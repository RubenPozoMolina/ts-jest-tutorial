import { Person } from "../src/person"
import { Department } from "../src/department"

describe("Person tests", () => {
    test("Check person creation", () => {
        let expectedName = "John";
        let expectedAge = 40;
        let person = new Person(expectedName, expectedAge, new Department("Finances"));
        expect(person.getName()).toBe(expectedName);
        expect(person.getAge()).toBe(expectedAge);
        expect(person.getDepartment()).toStrictEqual(new Department("Finances"));
    });

    test("Check person setters", () => {
        let name = "John";
        let age = 40;
        let person = new Person(name, age);
        person.setName("John Doe");
        person.setAge(41);
        person.setDepartment(new Department("Finances"));
        expect(person.getName()).toBe("John Doe");
        expect(person.getAge()).toBe(41);
        expect(person.getDepartment()).toStrictEqual(new Department("Finances"));
    });

    test("Check person exceptions", () => {
        let person = new Person("John", 1);
        expect(() => { person.setName("") }).toThrowError(new Error("Name cannot be empty"));
        expect(() => { person.setAge(-1) }).toThrowError(new Error("Age must be greater than 0"));
    });

})