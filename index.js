const inquirer = require("inquirer");
const { promises: fs } = require("fs");

async function Questions() {
  const answers = await inquirer.prompt([
    {
      // MANAGER QUESTIONS
      type: "input",
      name: "manager name",
      message: "Hi team manager, what is your name?",
    },
    {
      type: "input",
      name: "manager id",
      message: "Enter your ID number",
    },
    {
      type: "input",
      name: "manager email",
      message: "Enter your email address",
    },
    {
      type: "input",
      name: "manager office number",
      message: "What is your office number?",
    },
    {
      // ENGINEER QUESTIONS
      type: "input",
      name: "engineer name",
      message: "Hi engineer, what is your name?",
    },
    {
      type: "input",
      name: "engineer id",
      message: "Enter your ID number",
    },
    {
      type: "input",
      name: "engineer email",
      message: "Enter your email address",
    },
    {
      type: "input",
      name: "engineer github",
      message: "What is your github username?",
    },
    {
      // ENGINEER 2 QUESTIONS
      type: "input",
      name: "engineer 2 name",
      message: "Hi engineer 2, what is your name?",
    },
    {
      type: "input",
      name: "engineer 2 id",
      message: "Enter your ID number",
    },
    {
      type: "input",
      name: "engineer 2 email",
      message: "Enter your email address",
    },
    {
      type: "input",
      name: "engineer 2 github",
      message: "What is your github username?",
    },
    {
      //ENGINEER 3 QUESTIONS
      type: "input",
      name: "engineer 3 name",
      message: "Hi engineer 3, what is your name?",
    },
    {
      type: "input",
      name: "engineer 3 id",
      message: "Enter your ID number",
    },
    {
      type: "input",
      name: "engineer 3 email",
      message: "Enter your email address",
    },
    {
      type: "input",
      name: "engineer 3 github",
      message: "What is your github username?",
    },
    {
      //INTERN QUESTIONS
      type: "input",
      name: "intern name",
      message: "Hi intern, what is your name?",
    },
    {
      type: "input",
      name: "intern id",
      message: "Enter your ID number",
    },
    {
      type: "input",
      name: "intern email",
      message: "Enter your email address",
    },
    {
      type: "input",
      name: "intern school",
      message: "What school did you study at?",
    },
  ]);

  const templateContent = await fs.readFile("./template.html");
  const newTemplateContent = Object.keys(answers).reduce(
    (previous, current) => previous.replace(`{{${current}}}`, answers[current]),
    templateContent.toString()
  );

  await fs.writeFile("./index.html", newTemplateContent);
}

Questions();
