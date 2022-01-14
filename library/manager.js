// In addition to Employee's properties and methods, Manager will also have the following:
// officeNumber
// getRole()—overridden to return 'Manager'
class Manager {
    get officeNumber() {
        return this._officeNumber;
    }

    get role() {
        return this._role;
    }
    constructor(name, id, email, officeNumber) {
        // super for calling parent  class Employee properties and methods
        super(name, id, email);
        this._role = 'Manager'
        this._officeNumber = officeNumber;
    }
}