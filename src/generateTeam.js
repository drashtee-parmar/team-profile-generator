const Manager = require("..lib/Manager");
const Employee = require("..lib/Empolyee");
const Intern = require("..lib/Intern");

function generateCard(team) {
  for (let i = 0; i < team.length; i++) {
    const teamArr = team[i];
    switch (teamArr.getRole()) {
      case "Manager":
        const manager = new Manager(
          teamArr.name,
          teamArr.id,
          teamArr.email,
          teamArr.officeNumber
        );
        card.push(generateManagerCard(manager));
        break;
      default:
        break;
        /*TODO: Employee, Intern*/
    }
  }
  return card.join("");
}

let generateManagerCard = (Manager) =>
    `
      <div class= "card mb-4 rounded-3 shadow-sm">
          <div className = "card-header py-3" >
              <h3 class = "card-title manager-card-title">${Manager.getName()}</h3>
              <h4 class = "card-text"><i class="fas fa-mug-hot"></i></i>${Manager.role()}</h4>
          </div>
          <div class="card-body">
              <ul class="list-group list-group-flush>
                  <li class="list-group-item">ID: ${Manager.id()} </li>
                  <li class="list-group-item">EMAIL: ${Manager.email()} </li>
                  <li class="list-group-item">GITHUB: ${Manager.officeNumber()} </li>
              </ul>
          </div>
      </div>
  `;
