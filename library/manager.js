const Employee = require('./employee')

class Manager extends Employee{
    getOfficeNumber() { return this.officeNumber; }

    getRole() {return 'Manager';}

    constructor(name, id, email, officeNumber) {
        // super for calling parent  class Employee properties and methods
        super(name, id, email);
        this.role = 'Manager'
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;
