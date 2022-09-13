// required modules 
const inquirer =require('inquirer');
const fs = require('fs');
const generateTeam = require('./styling/page-template');

const Manager = require('./Team/Manager');
const Engineer = require('./Team/Engineer');
const Inter = require('./Team/Intern');
const { async } = require('rxjs');

const teamMembersData = [];

// Inform user of usage
console.log('Welcome to the team generator!');

//questions promted in CLI 
const questions = async () => {
    const answers = await 
    inquirer.promt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        },

        {
            type: "input",
            message: "What is your ID number?",
            name: "id",
        },

        {
            type: "input",
            message: "What is your email?",
            name: "email",   
        },

        {
            type: "list",
            message: "What is your role?",
            name: "role",
            choices: ["Engineer", "Intern", "Manager"],
        }
    ])




} 
