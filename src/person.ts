import Department from "../src/department"

class Person {
    private Name: string = ""
    private Age: number = 0
    private WorkingDepartment: Department | null = null;

    constructor(pName: string, pAge: number, pDepartment?: string) {
        this.setName(pName);
        this.setAge(pAge);
        if (pDepartment)
            this.setDepartment(pDepartment);
    };

    public getName(): string {
        return this.Name;
    }

    public getAge(): number {
        return this.Age;
    }

    public getDepartment(): string {
        if (this.WorkingDepartment)
            return this.WorkingDepartment.getName()
        else
            return "";
    }

    public setName(pName: string): void {
        if (pName) {
            this.Name = pName;
        } else {
            throw new Error("Name cannot be empty")
        }
    }

    public setAge(pAge: number): void {
        if (pAge >= 0) {
            this.Age = pAge;
        } else {
            throw new Error("Age must be greater than 0")
        }
    }

    public setDepartment(pDepartment: string) {
        this.WorkingDepartment = new Department(pDepartment);
    }
}

export { Person }