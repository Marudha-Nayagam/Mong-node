const os = require("os")

console.log("Free memory", os.freemem()/1024/1024/1024 , "GB")
console.log("Total memory", os.totalmem()/1024/1024/1024 , "GB")
console.log("Os version", os.version())
console.log("Cpus", os.cpus())