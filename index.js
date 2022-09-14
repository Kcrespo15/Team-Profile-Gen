// required modules 
const inquirer =require('inquirer');
const fs = require('fs');
const generateTeam = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const { async } = require('rxjs');

const teamMembersData = [];

// Inform user of usage
console.log('Welcome to the team generator!');

//questions promted in CLI 
const questions = async () => {
    const answers = await 
    inquirer.prompt([
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

    // Prompt selected based on role chosen
        if (answers.role === 'Manager') {
            const managerAnswers = await 
            inquirer.prompt ([
                {
                    type: "input",
                    message: "What is your office number",
                    name: "officeNum",
                }
            ])

            const newManager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                managerAnswers.officeNum
            );
            teamMembersData.push(newManager);
        } 
            else if (answers.role === 'Engineer') {
                const gitHubAnswer = await 
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What is your GitHub user name?",
                        name: "github",
                    }
                ])
                
                const newEngineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                gitHubAnswer.github
                );
                teamMembersData.push(newEngineer);
          }
            else if (answers.role === 'Intern') {
                const internAnswers = await 
                inquirer.prompt([
                    {
                        type: "input",
                        message: "What university did you attend?",
                        name: "school"
                    }
                ])

                const newIntern = new Intern(
                    answers.name,
                    answers.id,
                    answers.email,
                    internAnswers.school
                );
                teamMembersData.push(newIntern);
            }

    }; 

    //  create fucntion promt to either create team or add new memeber
    async function promptQuestions() {
        await questions()
          
        
        const addMemberAns = await inquirer
          .prompt([
            {
              name:'addMember',
              type: 'list',
              choices: ['Add a new member', 'Create team'],
              message: "What would you like to do next?"
            }
          ])
      
          if (addMemberAns.addMember === 'Add a new member') {
            return promptQuestions()
          }
          return createTeam();
      }  
      
      promptQuestions();

      // function to create finalized team 
      function createTeam () {
        console.log("new member", teamMembersData)
        fs.writeFileSync("dist/index.html", generateTeam(teamMembersData),"utf-8");
      }
