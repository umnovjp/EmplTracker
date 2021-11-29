INSERT INTO department (id, name)
VALUES (1, 'Scientology'),
       (2, 'Old Ritualists of Eastern Orthodox Christians'),
       (3, 'Jedism'),
       (4, 'Thelema'),
       (5, 'Zoroastrianism');

INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'Sr Scientologist', 100000, 2),
       (2, 'Principal Ritualist', 25000, 5),
       (3, 'Strategic Jedi', 1000000, 4),
       (4, 'Lead Prophet', 1, 2),
       (5, 'Zoroaster', 5, 1),
       (6, 'Apprentice', 30000, 1),
       (7, 'Former first priestess', 30000000, 3),
       (8, 'Junior Alabamacare Adviser', 25000, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'Jo3', 'Bid3n', 6, 1),
       (2, 'Ronald', 'Tramp', 1, 2),
       (3, 'Tony', 'Blinking', 2, 3),
       (4, 'Clint', 'Billton', 7, 4),
       (5, 'Jonny', 'Lynchy', 3, 5),
       (6, 'Mallory', 'Billton', 4, 6),
       (7, 'Baruch', 'Alabama', 8, 7);

