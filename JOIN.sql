create table EmpInfo(
EName VARCHAR(255),
Eid INT PRIMARY KEY,
Pid INT
);

create table PersonalInfo(
Pid INT PRIMARY KEY,
Pname VARCHAR(245)
);

INSERT INTO EmpInfo (Eid,EName,Pid)
VALUES
(1,'ajay',10),
(2,'amit',20),
(3,'akash',30),
(4,'aman',40),
(5,'preteek',50);

INSERT INTO PersonalInfo(Pid,Pname)
VALUES
(10,'HR'),
(20,'admin'),
(30,'devloper'),
(40,'analyst'),
(60,'business unit'),
(70,'tester');

SELECT e.EName,p.Pname 
FROM EmpInfo e
INNER JOIN PersonalInfo p
ON e.Pid=p.pid;

SELECT e.EName,p.Pname 
FROM EmpInfo e
LEFT JOIN PersonalInfo p
ON e.Pid=p.Pid;

SELECT e.EName,p.Pname 
FROM EmpInfo e
RIGHT JOIN PersonalInfo p
ON e.Pid=p.Pid;

SELECT e.EName,p.Pname 
FROM EmpInfo e
FULL JOIN PersonalInfo p
ON e.Pid=p.pid;

SELECT e.EName,p.Pname 
FROM EmpInfo e
CROSS JOIN PersonalInfo p



