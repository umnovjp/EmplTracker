const express = require('express');
const fs = require('fs');
const {whatTheHeckAreYouDoingHereToday} = require("./src/inquirer6.js");
// Import and require mysql2
const mysql = require('mysql2');
const elephant = `
       _                 
   ___/ \-.___          
.-/     (    o\_//     
|  ___  \_/\---'         
|_||  |_||  


`

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// // Connect to database
// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     // MySQL username,
//     user: 'root',
//     // MySQL password
//     password: 'Virahovs74#',
//     database: 'employee_db'
//   },
//   console.log(`Connected to the employee_db database.`)
// );

console.log(elephant);

whatTheHeckAreYouDoingHereToday();

// Read department id and name: first get route
// app.get('/db/department', (req, res) => {
//     const sql = `SELECT id, name AS name FROM department`;
    
//     db.query(sql, (err, rows) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//          return;
//       }
//       res.json({
//         message: 'success',
//         data: rows
//       });
//     });
//   }); removed 12/9

  // Read roles: second get route
// app.get('/db/role', (req, res) => {
//     const sql = `SELECT * FROM role`;
    
//     db.query(sql, (err, rows) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//          return;
//       }
//       res.json({
//         message: 'success',
//         data: rows
//       });
//     });
//   }); removed 12/9

    // Read employees: third get route
  // app.get('/db/employee', (req, res) => {
  //   const sql = `SELECT * FROM employee`;
    
  //   db.query(sql, (err, rows) => {
  //     if (err) {
  //       res.status(500).json({ error: err.message });
  //        return;
  //     }
  //     res.json({
  //       message: 'success',
  //       data: rows
  //     });
  //   });
  // }); removed 12/9

// Add a department first post route
// app.post('/db/department', ({ body }, res) => {
//     const sql = `INSERT INTO department (name)
//       VALUES (?)`;
//     const params = [body.name];
    
//     db.query(sql, params, (err, result) => {
//       if (err) {
//         res.status(400).json({ error: err.message });
//         return;
//       }
//       res.json({
//         message: 'success',
//         data: body
//       });
//     });
//   }); removed 12/9

  //second post route to add role
  // app.post('/db/role', ({ body }, res) => {
  //   const sql = `INSERT INTO role (title, salary, department_id)
  //     VALUES (?, ?, ?)`;
  //   const params = [body.title, body.salary, body.department_id];
    
  //   db.query(sql, params, (err, result) => {
  //     if (err) {
  //       res.status(400).json({ error: err.message });
  //       return;
  //     }
  //     res.json({
  //       message: 'success',
  //       data: body
  //     });
  //   });
  // }); removed 12/9

  // third post to add an employee
// app.post('/db/employee', ({ body }, res) => {
//     const sql = `INSERT INTO employee (first_name, last_name, manager_id, role_id)
//       VALUES (?, ?, ?, ?)`;
//     const params = [body.first_name, body.last_name, body.manager_id, body.role_id];
    
//     db.query(sql, params, (err, result) => {
//       if (err) {
//         res.status(400).json({ error: err.message });
//         return;
//       }
//       res.json({
//         message: 'success',
//         data: body
//       });
//     });
//   }); removed 12/9

  // Update role
// app.put('/db/role/:id', (req, res) => {
//     const sql = `UPDATE role SET (id, title, salary, department_id) WHERE id = ?`;
//     const params = [req.body.title, req.body.salary, req.body.department_id];
  
//     db.query(sql, params, (err, result) => {
//       if (err) {
//         res.status(400).json({ error: err.message });
//       } else if (!result.affectedRows) {
//         res.json({
//           message: 'role not found'
//         });
//       } else {
//         res.json({
//           message: 'success',
//           data: req.body,
//           changes: result.affectedRows
//         });
//       }
//     });
//   }); removed 12/9
  

// Query database puts department table to console.log
// db.query('SELECT * FROM department', function (err, results) {
//   console.log(results);
// });

// Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// }); removed 12/9

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// }); removed 12/9
