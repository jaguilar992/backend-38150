const http = require("http");
const {fork} = require("child_process");
const { calcular } = require("./calcular");


let visitas = 0;
const server = http.createServer();

server.on("request", (req, res) => {
  let { url } = req; // req.url 
                     // => let url = req.url;
  switch (url) {
    case "/":
      visitas++;
      res.end(`visitas: ${visitas}`);
      break;
    case "/calculo-bloq":
      visitas++;
      const suma = calcular();
      res.end(`suma: ${suma}`);
      break;
    case "/calculo-no-bloq":
      const child = fork("./child.js");
      child.send("start");
      child.on("message", (msg) => {
        res.end(`suma: ${msg}`);
      });
      break;
    default:
      res.end("404");
      break;
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})