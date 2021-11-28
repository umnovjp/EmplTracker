DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

DROP TABLE IF EXISTS department;
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(46) NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS role;
CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title TEXT NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) 
  REFERENCES department(id)
);

DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
    manager_id INT NOT NULL,
    role_id INT NOT NULL,
  FOREIGN KEY (role_id)
  REFERENCES role(id)
);