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

function employeeAddition() {
    inquirer.prompt([{
            type: "input",
            name: "firstName",
            message: "What is the employees first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the employees last name?"
        },
        {
            type: "number",
            name: "roleId",
            message: "What is the employees role ID"
        },
        {
            type: "number",
            name: "managerId",
            message: "What is the employees manager's ID?"
        }
    ]).then(function(res) {
        connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.roleId, res.managerId], function(err, data) {
            if (err) throw err;
            console.table("Successfully Inserted");
            questionsPrompt();
        })
    })
}

function roleAddition() {
    inquirer.prompt([
        {
            message: "enter title:",
            type: "input",
            name: "title"
        }, {
            message: "enter salary:",
            type: "number",
            name: "salary"
        }, {
            message: "enter department ID:",
            type: "number",
            name: "department_id"
        }
    ]).then(function (response) {
        connection.query("INSERT INTO roles (title, salary, department_id) values (?, ?, ?)", [response.title, response.salary, response.department_id], function (err, data) {
            console.table(data);
        })
        questionsPrompt();
    })

}
function employeeV() {
    connection.query("SELECT * FROM employee", function (err, data) {
        console.table(data);
        questionsPrompt();
    })
}

function employeeRoleUpdate() {
    inquirer.prompt([
        {
            message: "which employee would you like to update? (use first name only for now)",
            type: "input",
            name: "name"
        }, {
            message: "enter the new role ID:",
            type: "number",
            name: "role_id"
        }
    ]).then(function (response) {
        connection.query("UPDATE employee SET role_id = ? WHERE first_name = ?", [response.role_id, response.name], function (err, data) {
            console.table(data);
        })
        questionsPrompt();
    })

}