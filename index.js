const mysql2 = require("mysql2");
const inquirer = require("inquirer");
const table = require("console.table");

var connection = mysql2.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "Baxter48",
    database: "emp_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    questionsPrompt();
});

function questionsPrompt() {
    inquirer.prompt({
        message: "what would you like to do?",
        type: "list",
        choices: [
            "view all employees",
            "view all departments",
            "add employee",
            "add a department",
            "add a role",
            "update an employee role",
            "QUIT"
        ],
        name: "choice"
    }).then(answers => {
        console.log(answers.choice);
        switch (answers.choice) {
            case "view all employees":
                employeeV()
                break;

            case "view all departments":
                displayDepartments()
                break;

            case "add employee":
                employeeAddition()
                break;

            case "add department":
                addDepartment()
                break;

            case "add role":
                roleAddition()
                break;

            case "update employee role":
                employeeRoleUpdate();
                break;

            default:
                connection.end()
                break;
        }
    })
}

function addDepartment() {
    inquirer.prompt([{
        type: "input",
        name: "department",
        message: "What is the department that you want to add?"
    }, ]).then(function(res) {
        connection.query('INSERT INTO department (name) VALUES (?)', [res.department], function(err, data) {
            if (err) throw err;
            console.table("Successfully Inserted");
            questionsPrompt();
        })
    })
}


function displayDepartments() {
    connection.query("SELECT * FROM department", function (err, data) {
        console.table(data);
        questionsPrompt();
    })
}

