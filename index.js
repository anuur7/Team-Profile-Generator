const inquirer = require("inquirer");
//fixed fs require
const fs = require("fs");
//require constructor to pass info to it and create the new objects.
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//require the function from folder src that has the template.js in it.
const renderHtml = require("./src/template");

//create an empty array that I can use to push my objects into in order to create an array of objects.
const members = [];

//creating a function for Manager to allow the app to initialize and create a manager.
function promptManager() {
  inquirer
    .prompt([
      {
        // MANAGER QUESTIONS
        type: "input",
        name: "managerName",
        message: "Hi team manager, what is your name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "Enter your ID number",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Enter your email address",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is your office number?",
      },
    ])
    .then((answers) => {
      //use the Manager constructor to create my new Manager object to be displayed.
      const manager = new Manager(
        answers.managerName,
        answers.managerID,
        answers.managerEmail,
        answers.managerOfficeNumber
      );

      members.push(manager);

      //after being done with manager questions need to create a loop to go into main menu.
      menu();
    });
}

//create function with main menu for the next team members and/or Teambuild
function menu() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'mainMenu',
      message:'What would you like to do next?',
      choices:['Engineer", "Intern", "Build Team']
    }
  ]).then((answers)=>{
    //build a switch case to deal with the 3 options given to the user
    switch(answers.mainMenu){
      case"Engineer":
        promptEngineer();
        break;
      case "Intern":
        promptIntern()
        break;
      default:
        buildTeam();
    }
  })
}

promptManager();

function promptEngineer(){
  inquirer.prompt([
    {
            // ENGINEER QUESTIONS
            type: "input",
            name: "engineerName",
            message: "Hi engineer, what is your name?",
          },
          {
            type: "input",
            name: "engineerId",
            message: "Enter your ID number",
          },
          {
            type: "input",
            name: "engineerEmail",
            message: "Enter your email address",
          },
          {
            type: "input",
            name: "engineerGithub",
            message: "What is your github username?",
          },
  ]).then((answers)=>{
    const engineer= new Engineer(
      answers.engineerName,
      answers.engineerId,
      answers.engineerEmail,
      answers.engineerGithub
    )
    members.push(engineer)
    menu();
  })

}

function promptIntern(){
  inquirer.prompt([
     //INTERN QUESTIONS
     {
      type: "input",
      name: "internName",
      message: "Hi intern, what is your name?",
    },
    {
      type: "input",
      name: "internId",
      message: "Enter your ID number",
    },
    {
      type: "input",
      name: "internEmail",
      message: "Enter your email address",
    },
    {
      type: "input",
      name: "internSchool",
      message: "What school did you study at?",
    },

  ]).then((answers)=>{
     const intern= new Intern(
       answers.internName,
       answers.internId,
       answers.internEmail,
       answers.internSchool
     )
     members.push(intern)
     menu();
  })
}

//created function buildTeam to allow the index.html in dist to be overwritten with the new information input by the user. 
function buildTeam(){
  //write file sync takes the path to the file I want to overwrite
  //and the function with the parameter that contains all the data with the new objects to be rendered.
    fs.writeFileSync("./dist/index.html", renderHtml(members),(err)=>{
      if(err) throw err;
    })
}
