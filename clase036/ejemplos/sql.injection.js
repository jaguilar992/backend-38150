// Genera un server de express con una ruta de login que recibe un usuario y una contraseña
// y comprueba si el usuario y la contraseña son correctos en una 
// base de datos de ejemplo con postgres.

const express = require('express');
const app = express();
const port = 3000;

const { Client } = require('pg');
const client = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'password',
  port: 5432,
  database: 'coder'
});

client.connect();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', (req, res) => {
  const { user, password } = req.query;

  client.query(`SELECT * FROM users WHERE email = '${user}' AND passwd = '${password}'`, (err, result) => {
    if (err) {
      console.log(err);
      res.send('Error');
    } else {
      console.log(result.rows);
      res.send(result.rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
