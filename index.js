const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Employee = require('./lib/Employee.js');
const fs = require('fs');
const pageTemplate = require('./dist/pageTemplate');

var employees = [];

const managerProfile = function () {
    
   return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the team manager's name?",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('You need to enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is the employee ID?',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('You need to enter an id!');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is the email address of the employee?',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('You need to enter an email!');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'office',
            message: 'What is the office number of the employee?',
            validate: office => {
                if (office) {
                    return true;
                } else {
                    console.log('You need to enter an office number!');
                    return false;
                }
            }
        },
    ])

    .then(managerData => {
        const { name, id, email, officeNumber } = managerData;
        const manager = new Manager(name, id, email, officeNumber);
        employees.push(manager);
       
      
    })
};





