const inquirer = require('inquirer');
const mysql = require('mysql');
const tbale = require('console.table');



var connection = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: "root",
    password: "Leishy415!",
    database: "emptrack"
});

connection.connect(function (err) {
    if(err) throw err;
    console.log("connected as id " + connection)
})