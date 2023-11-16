USE emp_db;

INSERT INTO department (name)
VALUES ("Salesman");
INSERT INTO department (name)
VALUES ("Engineer");
INSERT INTO department (name)
VALUES ("Analyst");
INSERT INTO department (name)
VALUES ("HR");

INSERT INTO role (title, salary, department_id)
VALUES ("Salesman", 74000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 89000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("IT Analyst", 100000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 185000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("HR rep", 300000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Andrew", "Patty", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Doug", "Prescott", 2, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rob", "Tracy", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Calvin", "Hardy", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Matt", "Micek", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lord", "Ring", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Alicia", "Keys", 2, 8);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tuck", "Man", 1, 3);