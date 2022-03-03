const inquirer = require('inquirer');

async function managerQuestions() {
    const answers = await inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is your name manager?'
    }, {
        type: 'input',
        name: 'id',
        message: 'Enter your ID number'
    }, {
        type: 'input',
        name: 'email',
        message: 'Enter your email address?'
    }, {
        type: 'input',
        name: 'office number',
        message: 'What is your office number?'
    }])
    
    console.log(answers)
}

managerQuestions()