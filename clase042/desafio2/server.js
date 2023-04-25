import http from "http";

// Definir array de numeros

const server = http.createServer(function (req, res) {
  // Leer la ruta y el cuerpo
  const date = new Date();
  const resp = JSON.stringify({
    FyH: date
  })
  res.write(resp);
  res.end();
});

server.listen(3001, () => {
  console.log("Server running on port 3001");
})