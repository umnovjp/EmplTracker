const inquirer = require('inquirer');

const whatTheHeckAreYouDoingHereToday = () => {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'whatToDo',
            message: 'what the heck do you want to do today',
            choices: ['view employees', 'add employee', 'update employee role', 'view all roles'],
        }
    ])
    console.log(choice.type);
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