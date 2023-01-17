CREATE TABLE events(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NULL,
    date DATETIME NOT NULL,
    local VARCHAR(255) NOT NULL,
    price INTEGER NOT NULL,
    address VARCHAR(255) NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME
)

SELECT * FROM events;

DROP TABLE events;

INSERT INTO events(title,description,date, local, price, address)
VALUES ('Teste', 'Testinho', datetime('now'), 'Estádio Unicórnio', 200, 'Rua do Unicórnio, 666')

CREATE TABLE reservations(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME,
    eventId INTEGER NOT NULL REFERENCES events(id)
)

CREATE TABLE users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255),
    createdAt DATETIME,
    updatedAt DATETIME
)

DROP TABLE reservations
DROP TABLE users

INSERT INTO reservations(name, quantity, eventId) VALUES ('Testadora', 2, 1)

SELECT*FROM reservations

SELECT*FROM events as e JOIN reservations as r ON e.id = r.eventId WHERE e.title = 'Teste'