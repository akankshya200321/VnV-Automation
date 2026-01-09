create table orders(
Pname VARCHAR(255),
Pid INT PRIMARY KEY,
order_date DATE,
quantity INT,
p_price DECIMAL
);

INSERT INTO orders(Pid,Pname,quantity,order_date,p_price)
VALUES
(20110,'paneer',20,'2026-01-01',100.0),
(20111,'fresh cream',12,'2026-01-22',70.65),
(20112,'curd',5,'2026-01-12',30.00),
(20113,'milk',50,'2025-12-20',28.50);

SELECT *
FROM orders;

create table delivered(
Pid INT,
isdelivered BOOLEAN,
delivery_time TIME
);

INSERT INTO delivered(Pid,isdelivered,delivery_time)
VALUES
(20110,TRUE, '20:30:14'),
(20111,FALSE,NULL),
(20112,FALSE,NULL),
(20113,TRUE, '17:15:34');

SELECT *
FROM delivered;

