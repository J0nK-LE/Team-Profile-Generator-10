function renderCard(workTeam){
    let managerCardTemplate = " "
    let engineerCardTemplate = " "
    let internCardTemplate = " "



    for (let i = 0; i < workTeam.length; i++) {
        const element = workTeam[i];
        if(element.getRole() == "Manager"){
            managerCardTemplate += `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Manager</h5>
              <p class="card-text">Name: ${element.name}</p>
              <p class="card-text">ID number: ${element.id}</p>
              <p class="card-text">Email: ${element.email}</p>
              <p class="card-text">Office Number: ${element.officeNumber}</p>
            
            </div>
          </div>`
        } else if(element.getRole() == "Engineer"){
            engineerCardTemplate += `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Engineer</h5>
            <p class="card-text">Name: ${element.name}</p>
            <p class="card-text">ID number: ${element.id}</p>
            <p class="card-text">Email: ${element.email}</p>
            <p class="card-text">GitHub: ${element.github}</p>
          
          </div>
        </div>`
        } else{
            internCardTemplate += `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Intern</h5>
            <p class="card-text">Name: ${element.name}</p>
            <p class="card-text">ID number: ${element.id}</p>
            <p class="card-text">Email: ${element.email}</p>
            <p class="card-text">School: ${element.school}</p>
          
          </div>
        </div>`

        }
        
    }
    let fetchHtml = `<!doctype html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    </head>
    
    <body>
        <header>
            <div class="text-center bg-danger bg-gradient text-white p-4">
                <h1>My Team</h1>
            </div>
        </header>
        
        ${managerCardTemplate}
        ${engineerCardTemplate}
        ${internCardTemplate}
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
            crossorigin="anonymous"></script>
    </body>
    
    </html>`
    return fetchHtml
}
module.exports = renderCard