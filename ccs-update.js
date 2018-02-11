const fs = require('fs');

const file = fs.createWriteStream('C:\\dev\\proj\\ccs\\ccs-update.log');

file.write('testing...\nt = ' + Date.now());
file.end();
