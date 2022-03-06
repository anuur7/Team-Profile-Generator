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

//   {
//     // ENGINEER QUESTIONS
//     type: "input",
//     name: "engineer name",
//     message: "Hi engineer, what is your name?",
//   },
//   {
//     type: "input",
//     name: "engineer id",
//     message: "Enter your ID number",
//   },
//   {
//     type: "input",
//     name: "engineer email",
//     message: "Enter your email address",
//   },
//   {
//     type: "input",
//     name: "engineer github",
//     message: "What is your github username?",
//   },
//   {
//     //INTERN QUESTIONS
//     type: "input",
//     name: "intern name",
//     message: "Hi intern, what is your name?",
//   },
//   {
//     type: "input",
//     name: "intern id",
//     message: "Enter your ID number",
//   },
//   {
//     type: "input",
//     name: "intern email",
//     message: "Enter your email address",
//   },
//   {
//     type: "input",
//     name: "intern school",
//     message: "What school did you study at?",
//   },
// ]);

// await fs.writeFile("./index.html", newTemplateContent);
