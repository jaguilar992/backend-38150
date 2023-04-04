CREATE TABLE users(
	id SERIAL NOT NULL,
	nombre VARCHAR(500),
	email VARCHAR(500),
	passwd VARCHAR(500)
);



INSERT INTO users (nombre, email, passwd)
VALUES ('Juan', 'juan@example.com', 'manzana123');

INSERT INTO users (nombre, email, passwd)
VALUES ('María', 'maria@example.com', 'frutilla123');

INSERT INTO users (nombre, email, passwd)
VALUES ('Carlos', 'carlos@example.com', 'pera');

INSERT INTO users (nombre, email, passwd)
VALUES ('Laura', 'laura@example.com', 'mango');

INSERT INTO users (nombre, email, passwd)
VALUES ('Pedro', 'pedro@example.com', 'platano');