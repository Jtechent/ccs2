/*
 * USAGE: node ccs-update C:\\path\\to\\logfile
 */

const fs = require("fs");

var path = "ccs-update.log";

if (process.argv.length >= 3)
{
    path = process.argv[2] + "\\" + path;
}

const file = fs.createWriteStream(path);

file.write("testing...\nt = " + Date.now());
file.end();

console.log("success, logged to " + path);
