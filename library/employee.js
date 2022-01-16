class Employee {
  getName() {return this.name;}

  getId() {return this.id;}

  getEmail() {return this.email;}

  getRole() {return 'Employee';}

  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
}

module.exports = Employee;
