const genCardHTML = [];

function generateTeamCardHTML(employee){
    if (employee.getRole() == "Manager"){
        return `
        <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3 text-center">
                <h3 class="card-title manager-name"> ${manager.getName()} </h3>
                <h4 class="card-subtitle role"><i class="fas fa-mug-hot"></i> Manager </h4>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item id">ID: ${manager.getId()}</li>
                    <li class="list-group-item email">Email: <a href="mailto:${manager.getEmail()}"> ${manager.getEmail()} </a>
                    </li>
                    <li class="list-group-item officeNumber">Office Number: ${manager.officeNumber} </li>
                </ul>
            </div>
        </div>
    </div>
        `;
    } else if(employee.getRole() == "Engineer"){
        return `
        <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3 text-center">
                    <h3 class="card-title engineer-name"> ${engineer.getName()} </h3>
                    <h4 class="card-subtitle role"><i class="fas fa-glasses"></i> Engineer </h4>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item id">ID: ${engineer.getId()} </li>
                        <li class="list-group-item email">Email: <a href="mailto:${engineer.getEmail()}"> ${engineer.getEmail()} </a>
                        </li>
                        <li class="list-group-item github">Github Profile: <a href="https://github.com/${engineer.getGithub()}" target="_blank"> ${engineer.getGithub()} </a> </li>
                    </ul>
                </div>
            </div>
        </div>
        `; 
    } else if (employee.getRole() == "Intern"){
        return `
        <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3 text-center">
                    <h3 class="card-title intern-name"> ${intern.getName()} </h3>
                    <h4 class="card-subtitle role"><i class="fas fa-user-graduate"></i> Intern </h4>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item id">ID: ${intern.getId()} </li>
                        <li class="list-group-item email">Email: <a href="mailto:${intern.getEmail()}"> ${emplointernyee.getEmail()} </a>
                        </li>
                        <li class="list-group-item school">School: ${intern.getSchool()} </li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    }
}

const generateTeamProfileHTML = () => {
    return`
    <!doctype html>
    <html lang="en">
    
    <head>
        <title>Profile</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./css/style.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">
    </head>
    
    <body>
        <div class="jumbotron text-center">
            <h1>Team name</h1>
        </div>
        <main>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-3 mb-3 ">
                ${genCardHTML}
                </div>
            </div>
        </main>
    </body>
    
    </html>
    `;
};

module.exports = {generateTeamCardHTML, generateTeamProfileHTML, genCardHTML};


