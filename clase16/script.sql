CREATE DATABASE IF NOT EXISTS plataforma_db;
USE plataforma_db;

SHOW TABLES;
DESCRIBE personas;
DESCRIBE provincias;

# DROP TABLE personas;
# DROP TABLE provincias;
# DROP TABLE knex_migrations;
# DROP TABLE knex_migrations_lock;

# DROP DATABASE plataforma_db;

INSERT INTO personas(name, age)
VALUES('Antonio', 30);

SELECT * FROM personas;

SELECT * FROM provincias;

DESCRIBE personas;

INSERT INTO personas (nombre, edad) VALUES ('Antonio', 30);
INSERT INTO personas (nombre, edad) VALUES ('Juan', 28);