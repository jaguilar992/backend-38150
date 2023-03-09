const os = require("os");

const numCpus = os.cpus().length;
console.log(numCpus);