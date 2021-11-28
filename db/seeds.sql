INSERT INTO department (id, name)
VALUES (1, 'Scientology'),
       (2, 'Old Ritualists of Eastern Orthodox Christians'),
       (3, 'Jedism'),
       (4, 'Thelema'),
       (5, 'Zoroastrianism');

INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'Sr Scientologist', 100000, 6),
       (2, 'Principal Ritualist', 25000, 7),
       (3, 'Strategic Jedi', 1000000, 8),
       (4, 'Lead Prophet', 1, 9),
       (5, 'Zoroaster', 5, 10),
       (6, 'Apprentice', 30000, 11),
       (7, 'Junior Alabamacare Adviser', 25000, 12);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'Jo3', 'Bid3n', 13, 1),
       (2, 'Ronald', 'Tramp', 666, 2),
       (3, 'Tony', 'Blinking', 1984, 3),
       (4, 'Clint', 'Billton', 1776, 4),
       (5, 'Jonny', 'Lynchy', 2001, 5),
       (6, 'Mallory', 'Billton', 2020, 6),
       (7, 'Baruch', 'Alabama', 2012, 7);

