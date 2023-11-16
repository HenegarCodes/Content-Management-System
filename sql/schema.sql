DROP DATABASE IF EXISTS emp_db;

CREATE DATABASE emp_db;
USE emp_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(25) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(25) NULL,
  salary DECIMAL(10.3) NULL,
  department_id INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(20) NULL,
  last_name VARCHAR(23) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);