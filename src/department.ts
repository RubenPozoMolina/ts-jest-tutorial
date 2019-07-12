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

    public getAbbreviatedName(): string {
        return this.Name.substring(0, 3);
    }
}

export { Department }