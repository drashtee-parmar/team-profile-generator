const Employee = require('./employee')

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        // super for calling parent  class Employee properties and methods
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() { return this.officeNumber; }

    getRole() {return 'Manager';}

}

module.exports = Manager;
