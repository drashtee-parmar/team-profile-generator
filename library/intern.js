// In addition to Employee's properties and methods, Intern will also have the following:
// school
// getSchool()
// getRole()—overridden to return 'Intern'
class Intern {
    get school() {
        return this._school;
    }

    get role() {
        return this._role;
    }
    constructor(name, id, email, school) {
        super(name, id, email)
        this._role = 'intern'
        this._school = school;
    }
}