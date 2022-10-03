function renderHtml(workTeam) {
  let managerCardTemplate = " "
  let engineerCardTemplate = " "
  let internCardTemplate = " "



  for (let i = 0; i < workTeam.length; i++) {
    const worker = workTeam[i];
    if (worker.getRole() == "Manager") {
      managerCardTemplate += `<div class="card m-3" style="width: 18rem;">
            <div class="bg-primary text-white">
            <h4 class="card-title p-1">${worker.name}</h4>
            <h5 class="card-title p-1">&#9749 Manager</h5>
            </div>
            <div class="card-body">
              <p class="card-text">ID number: ${worker.id}</p>
              <p class="card-text">Email:<a href="mailto:${worker.email}">${worker.email}</a></p>
              <p class="card-text">Office Number: ${worker.officeNumber}</p>
            
            </div>
          </div>`
    } else if (worker.getRole() == "Engineer") {
      engineerCardTemplate += `<div class="card m-3" style="width: 18rem;">
            <div class="bg-primary text-white">
            <h4 class="card-title p-1">${worker.name}</h4>
            <h5 class="card-title p-1">&#128083 Engineer</h5>
            </div>
            <div class="card-body">
            <p class="card-text">ID number: ${worker.id}</p>
            <p class="card-text">Email:<a href="mailto:${worker.email}">${worker.email}</a></p>
            <p class="card-text">GitHub:<a href="https://www.github.com/${worker.github}">${worker.github}</a></p>
          
          </div>
        </div>`
    } else {
      internCardTemplate += `<div class="card m-3" style="width: 18rem;">
            <div class="bg-primary text-white">
            <h4 class="card-title p-1">${worker.name}</h4>
            <h5 class="card-title p-1">&#127891 Intern</h5>
            </div>
            <div class="card-body">
            <p class="card-text">ID number: ${worker.id}</p>
            <p class="card-text">Email:<a href="mailto:${worker.email}">${worker.email}</a></p>
            <p class="card-text">School: ${worker.school}</p>
          
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
        <main class="d-flex flex-wrap justify-content-center m-3 p-4">
        ${managerCardTemplate}
        ${engineerCardTemplate}
        ${internCardTemplate}
        </main>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
            crossorigin="anonymous"></script>
    </body>
    
    </html>`
  return fetchHtml
}
module.exports = renderHtml