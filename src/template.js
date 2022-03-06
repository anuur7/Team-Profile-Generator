//main function to generate team
function generateTeam (data){

    //function to generate the manager card
    const managerCard = manager =>{
        return `
        <div class="card" style="width: 18rem;">
        <h2>${manager.name}</h2>
        <h3> ${manager.getRole()}</h3>
        <div class="list-card" style="width: 18rem;">
            <ul class="list">
                <li class="list-group-item">ID: ${manager.id} </li>
                <li class="list-group-item">Email: ${manager.email} </li>
                <li class="list-group-item">Office Number: ${manager.officeNumber} </li>
            </ul>
          </div>
      </div>
        `
    }

    const engineerCard= engineer =>{
    return `
    
    <div class="card" style="width: 18rem;">
    <h2>${engineer.name}</h2>
    <h3>${engineer.getRole()}</h3>
    <div class="list-card" style="width: 18rem;">
        <ul class="list">
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">Email: ${engineer.email}</li>
          <li class="list-group-item">Github: ${engineer.github}</li>
        </ul>
      </div>
  </div>
    `
    }

const internCard = intern =>{
    return `
    <div class="card" style="width: 18rem;">
    <h2>${intern.name}</h2>
    <h3>${intern.getRole()}</h3>
    <div class="list-card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id} </li>
            <li class="list-group-item">Email: ${intern.email}</li>
            <li class="list-group-item">School: ${intern.school} </li>
        </ul>
      </div>
  </div>
    `
}

// create an empty array that will allow us to filter and map through this cards and generate them number correspondent in the array of objects. 

const teamArr =[]

teamArr.push(data.filter(teamMember => teamMember.getRole()==="Manager").map(manager=>managerCard(manager)))
teamArr.push(data.filter(teamMember => teamMember.getRole()==="Engineer").map(engineer=>engineerCard(engineer)))
teamArr.push(data.filter(teamMember => teamMember.getRole()==="Intern").map(intern=>internCard(intern)))

return teamArr.join("")
}