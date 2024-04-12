export default class User {
    private name:string = '';
    constructor(name: string) {
        this.name = name;
    }

    setName(name: string) {
        this.name = name
    }

    displayName() {
        console.log(this.name)
        console.log(this.getNameLength())
    }

    private getNameLength() {
        return this.name.length
    }
}