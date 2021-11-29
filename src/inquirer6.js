const inquirer = require('inquirer');
const fs = require('fs');
fs.readFile('./src/list.txt', 'utf8', (err, data) => {
    text1 = data
    console.log(typeof text1);
    table0 = text1.split(']')
})

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
            console.log('here is table2 ' + table0[2])
            whatTheHeckAreYouDoingHereToday();
        }
        else if (choice1 == 'add employee') {
            console.log('u r in add employee');
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'empl_name',
                    message: 'enter new employee name',
                }
            ]).then(choice2 => {console.log(choice2);
               whatTheHeckAreYouDoingHereToday();
            })   
        }
        else if (choice1 == 'add role') {
            console.log('u r in add role');
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'role_name',
                    message: 'enter new role name',
                }
            ]).then(choice4 => {console.log(choice4);
               whatTheHeckAreYouDoingHereToday();
            })
        }
        else if (choice1 == 'view departments') {
            console.log('u r in view departments');
            console.log('here is table0 ' + table0[0]);
            whatTheHeckAreYouDoingHereToday();
        }
        else if (choice1 == 'view roles') {
            console.log('u r in view roles');
            console.log('here is table1 ' + table0[1]);
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

// const addTeamMember = teamData => {
//     return inquirer.prompt([
//         {
//             type: 'list',
//             name: 'type',
//             message: 'Do you want to add an engineer or an intern?',
//             choices: ["engineer", "intern"],
//         }]).then(choice => {
//             if (choice.type === "engineer") {
//                 return inquirer.prompt([
//                     {
//                         type: 'input',
//                         name: 'name0',
//                         message: 'please enter name of engineer',
//                     },
//                     {
//                         type: 'input',
//                         name: 'id0',
//                         message: 'please enter his or her id',
//                     },
//                     {
//                         type: 'input',
//                         name: 'email0',
//                         message: 'please enter the email address',
//                     },
//                     {
//                         type: 'input',
//                         name: 'github',
//                         message: 'please enter github username',
//                     },

//                 ])
//             }
//             else {
//                 return inquirer.prompt([
//                     {
//                         type: 'input',
//                         name: 'name0',
//                         message: "please enter name of intern",
//                     },
//                     {
//                         type: 'input',
//                         name: 'id0',
//                         message: "please enter his or her id",
//                     },
//                     {
//                         type: 'input',
//                         name: 'email0',
//                         message: 'please enter email of the intern',
//                     },
//                     {
//                         type: 'input',
//                         name: 'school',
//                         message: 'please enter school intern attends',
//                     },
//                     {
//                         type: 'list',
//                         name: 'ttoAddOrNotToAdd',
//                         message: 'Do you want to another guy to your team?',
//                         choices: ['y', 'n'],
//                     }
//                 ])
//             }
//         })
// }

module.exports = { whatTheHeckAreYouDoingHereToday };