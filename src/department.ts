class Department {
    private Name: string = "";

    constructor(pName: string) {
        this.setName(pName)
    }

    public setName(pName: string): void {
        this.Name = pName;
    }

    public getName(): string {
        return this.Name;
    }
}

export { Department }