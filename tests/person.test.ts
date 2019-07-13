import { mocked } from "ts-jest/utils"
import { Person } from "../src/person"
import Department  from "../src/department"
jest.mock("../src/department");

const mockedDepartment = mocked(Department);

describe("Person tests", () => {

    beforeAll(() => {
        mockedDepartment.mockClear();
        mockedDepartment.mockImplementation(() => { return {
            getName():string { return "Finances"},
            getAbbreviatedName(): string {return "Fin"}
        } as Department })
    });

    test("Check person creation", () => {
        let expectedName = "John";
        let expectedAge = 40;
        let expectedDepartment = "Finances";
        let person = new Person(expectedName, expectedAge, expectedDepartment);
        expect(person.getName()).toBe(expectedName);
        expect(person.getAge()).toBe(expectedAge);
        expect(person.getDepartment()).toBe(expectedDepartment);
    });

    test("Check person setters", () => {
        let name = "John";
        let age = 40;
        let person = new Person(name, age);
        person.setName("John Doe");
        person.setAge(41);
        person.setDepartment("Finances");
        expect(person.getName()).toBe("John Doe");
        expect(person.getAge()).toBe(41);
        expect(person.getDepartment()).toBe("Finances");
    });

    test("Check person exceptions", () => {
        let person = new Person("John", 1);
        expect(() => { person.setName("") }).toThrowError(new Error("Name cannot be empty"));
        expect(() => { person.setAge(-1) }).toThrowError(new Error("Age must be greater than 0"));
    });


    test("Check person without department", () => {
        let person = new Person("John", 1);
        expect(person.getDepartment()).toBe("");
    });

})