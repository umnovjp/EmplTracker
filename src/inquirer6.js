const db = require('../db/connection');
const inquirer = require('inquirer');
const fs = require('fs');
const cTable = require('console.table');
// fs.readFile('./src/list.txt', 'utf8', (err, data) => {
//     text1 = data
//     console.log(typeof text1);
//     table0 = text1.split(']')
// })

const whatTheHeckAreYouDoingHereToday = () => {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'whatToDo',
            message: 'what the heck do you want to do today',
            choices: ['view employees', 'add employee', 'add role', 'add department', 'view departments', 'view roles', 'update role'],
        }
    ]).then(choice => {
        tempObject = choice;
        choice1 = tempObject.whatToDo;

        if (choice1 == 'view employees') {
            console.log('u r in view employees');
// simple query
db.query(
    'SELECT * FROM `employee`',
    function(err, results, fields) {
       console.table(results); // results contains rows returned by server
    }
  );
            whatTheHeckAreYouDoingHereToday();
        }
        else if (choice1 == 'add employee') {
            console.log('u r in add employee');
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'first_name',
                    message: 'enter new employee first name',
                },
                {
                    type: 'input',
                    name: 'last_name',
                    message: 'enter new employee last name',
                },
                {
                    type: 'input',
                    name: 'manager_id',
                    message: 'enter manager id',
                },
                {
                    type: 'input',
                    name: 'role_id',
                    message: 'enter freaking role id',
                }
            ]).then(choice2 => {console.log(choice2);
const { first_name, last_name, manager_id, role_id } = choice2
                // execute will internally call prepare and query
db.execute(
    'INSERT INTO `employee` (first_name, last_name, manager_id, role_id) VALUES (?,?,?,?)',
    [first_name, last_name, manager_id, role_id],
    function(err, results, fields) {
        if (err) console.log(err);
      console.table(results); // results contains rows returned by server
    }
  );
              whatTheHeckAreYouDoingHereToday();
            })   
        }
        else if (choice1 == 'add role') {
            console.log('u r in add role');
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'enter title',
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'enter salary',
                },
                {
                    type: 'input',
                    name: 'department_id',
                    message: 'enter dept id',
                }
            ]).then(choice4 => {console.log(choice4);
                const { title, salary, department_id } = choice4
                // execute will internally call prepare and query
db.execute(
    'INSERT INTO `role` (title, salary, department_id) VALUES (?,?,?)',
    [title, salary, department_id],
    function(err, results, fields) {
        if (err) console.log(err);
      console.log(results); // results contains rows returned by server
    }
  );
               whatTheHeckAreYouDoingHereToday();
            })
        }
        else if (choice1 == 'add department') {
            console.log('u r in add department');
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'enter department name',
                }
            ]).then(choice5 => {console.log(choice5);
                const { name } = choice5
                // execute will internally call prepare and query
db.execute(
    'INSERT INTO `department` (name) VALUES (?)',
    [name],
    function(err, results, fields) {
        if (err) console.log(err);
      console.log(results); // results contains rows returned by server
    }
  );
               whatTheHeckAreYouDoingHereToday();
            })
        }
        else if (choice1 == 'view departments') {
            console.log('u r in view departments');
            db.query(
                'SELECT * FROM `department`',
                function(err, results, fields) {
                   console.table(results); // results contains rows returned by server
                }
              );
            whatTheHeckAreYouDoingHereToday();
        }
        else if (choice1 == 'view roles') {
            console.log('u r in view roles');
            db.query(
                'SELECT * FROM `role`',
                function(err, results, fields) {
                   console.table(results); // results contains rows returned by server
                }
              );
            whatTheHeckAreYouDoingHereToday();
        }
        else if (choice1 == 'update role') {
            console.log('u r in update role');
            whatTheHeckAreYouDoingHereToday();
        }
        else {
            console.log('staff happens... your choice was invalid');
            whatTheHeckAreYouDoingHereToday();
        }
    })

        ;

};

module.exports = { whatTheHeckAreYouDoingHereToday };