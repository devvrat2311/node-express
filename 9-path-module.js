const path = require('path');

console.log(`separator: ${path.sep}`);

const filePath = path.join('/content', 'subfolder', 'test.txt');

console.log(`the filePath construucted is: ${filePath}`);

const base = path.basename(filePath);
console.log(`the base of filePath is: ${base}`);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(`the absolute path is given as: ${absolute}`);