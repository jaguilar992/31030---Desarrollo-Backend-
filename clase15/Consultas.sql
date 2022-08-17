SHOW DATABASES;

-- Creación de la base de datos plataforma
-- Va a contener varias
CREATE DATABASE plataforma;
USE plataforma;

-- Creacion una tabla
-- Tabla usuarios: {id, nombre, apellido, fecha_nacimiento}

CREATE TABLE IF NOT EXISTS usuarios(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, -- Auto increment nos sirve para llevar un id que le suma automaticamente
  nombre VARCHAR(255) NOT NULL,
  apellido VARCHAR(255) NOT NULL,
  fecha_nacimiento DATE
);

-- CRUD

-- CREATE -> INSERT
-- Agregar registros
INSERT INTO usuarios (nombre, apellido, fecha_nacimiento) 
VALUES ('Antonio', 'Aguilar', STR_TO_DATE("2022-08-16", "%Y-%m-%d"));

INSERT INTO usuarios (nombre, apellido, fecha_nacimiento) 
VALUES ('Juan', 'Perez', STR_TO_DATE("2021-01-01", "%Y-%m-%d"));

INSERT INTO usuarios (nombre, apellido, fecha_nacimiento) 
VALUES ('Maria', 'Lopez', STR_TO_DATE("2020-01-01", "%Y-%m-%d"));

INSERT INTO usuarios (nombre, apellido, fecha_nacimiento) 
VALUES 
	('Zulema', 'Rodriguez', STR_TO_DATE("1992-01-01", "%Y-%m-%d")),
    ('Julio', 'Martinez', STR_TO_DATE("2003-01-01", "%Y-%m-%d"));

-- READ
SELECT * FROM usuarios;
-- El asterisco significa pasar todos los campos de la tabla
-- Sino especificamos un filtro con WHERE nos trae toda la data de la tabla

-- Leer el nombre de todos los registros en la tabla usuarios
SELECT id,nombre FROM usuarios;

-- Sentencia WHERE (Sirve para filtrar data)
-- El usuario con el id
SELECT * 
FROM usuarios
WHERE id=2;

-- Usuarios con id mayor o igual que 2
SELECT * 
FROM usuarios
WHERE id>=2;





-- Consultar las personas nacidas en el año 2020
-- EXTRACT(_ FROM field) -- Devuelve la parte de la fecha
SELECT * 
FROM usuarios
WHERE EXTRACT(year FROM fecha_nacimiento) = 2020;

-- Todas las personas nacidas a partir del año 2020
SELECT * 
FROM usuarios
WHERE EXTRACT(year FROM fecha_nacimiento) >= 2020;

-- ---------------------------- OJO
-- ---------------------------- MUCHO CUIDADO
-- ---------------------------- NUNCA HAGAS UN DELETE O UPDATE SIN EL WHERE

-- UPDATE
UPDATE usuarios
SET
  nombre = 'Marcos', apellido = 'Morales'
WHERE id = 1;

-- DELETE
DELETE FROM usuarios WHERE id = 1;


-- Agregar una nueva columna a la tabla usuarios
ALTER TABLE usuarios
ADD COLUMN edad INT;

ALTER TABLE usuarios
ADD COLUMN email VARCHAR(255) NOT NULL;

-- UPDATE
UPDATE usuarios SET edad = 18 WHERE id >= 2;