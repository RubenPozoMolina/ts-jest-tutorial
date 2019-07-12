class Person {
    private Name: string = ""
    private Age: number = 0

    constructor(pName: string, pAge: number) {
        this.setName(pName);
        this.setAge(pAge);
    };

    public getName(): string {
        return this.Name;
    }

    public getAge(): number {
        return this.Age;
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
}

export { Person }