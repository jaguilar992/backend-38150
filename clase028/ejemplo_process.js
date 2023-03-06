console.log("process.cwd(): ", process.cwd());
console.log("process.pid: ", process.pid);
console.log("process.version: ", process.version);
console.log("process.title: ", process.title);
console.log("process.platform: ", process.platform);
console.log("process.memoryUsage(): ", process.memoryUsage());

const array = Array(100000).fill(10);

console.log("process.memoryUsage(): ", process.memoryUsage());
