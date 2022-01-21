class Employee {
  getName() {return this.name;}

  getId() {return this.id;}

  getEmail() {return this.email;}

  getRole() {return this.role;}

  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee'
  }
}

module.exports = Employee;
