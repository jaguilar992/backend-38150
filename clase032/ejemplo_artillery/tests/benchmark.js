const autocannon = require("autocannon");
const { PassThrough } = require("stream");

function run (url) {
  const buf = [];
  const outputStream = new PassThrough();


  const inst = autocannon({
    url,
    connections: 200,
    duration: 20,
  });

  autocannon.track(inst, {outputStream});

  outputStream.on('data', data => buf.push(data))
  inst.on("done", function () {
    process.stdout.write(Buffer.concat(buf));
  });

  console.log("Running all benchmark in parallel...")
}

// run("http://localhost:8080/?max=10000")
// run("http://localhost:8080/?max=500000")

run("http://localhost:8080/random?max=10000")
run("http://localhost:8080/random?max=500000")