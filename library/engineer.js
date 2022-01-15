// In addition to Employee's properties and methods, Engineer will also have the following:
// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'
// noinspection JSAnnotator

class Engineer {
  get github() {
    return this._github;
  }

  get role() {
    return this._role;
  }
  constructor(name, id, email, github) {
    super(name, id, email);
    this._role = "Engineer";
    this._github = github;
  }
}
