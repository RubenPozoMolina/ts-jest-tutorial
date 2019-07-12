import { Department } from "../src/department"

describe("Department tests", () => {
    test("Check department creation", () => {
        let expectedName = "Finances";
        let department = new Department(expectedName);
        expect(department.getName()).toBe(expectedName);
    });

    test("Check department setters", () => {
        let name = "Finances";
        let department = new Department("Finan");
        department.setName(name);
        expect(department.getName()).toBe(name);
    });

})