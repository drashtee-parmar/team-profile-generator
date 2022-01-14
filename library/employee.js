// The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'

class Employee{
    get name() {
        return this._name;
    }

    get id() {
        return this._id;
    }

    get email() {
        return this._email;
    }

    get role() {
        return this._role;
    }
    constructor(name, id, email){
        this._role = 'Employee';
        this._name = name;
        this._id = id;
        this._email = email;
    }
}