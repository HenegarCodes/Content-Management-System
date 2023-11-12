const inquirer = require('inquirer');
const mysql = require('mysql');
const tbale = require('console.table');



var connectionSQL = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "Leishy415!",
    database: "emptrack"
});

connectionSQL.connect(function (err) {
    if(err) throw err;
    console.log("connected as id " + connection.threadID + "\n");
    tableQuestions();
})

function tableQuestions() {
    inquirer.prompt({
        message: "choice an action below:",
        type: 'list',
        choices: [
            "view all employees",
            "view all departments",
            "add employee",
            "add department",
            "add role",
            "update employee role",
            "QUIT"
        ]

    })
}
