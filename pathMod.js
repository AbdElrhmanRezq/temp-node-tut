const path = require('path');

const filePath = path.join('/content//','subFolder','text2.txt');
//console.log(filePath);

const base= path.basename(filePath);
//console.log(base);

const absoulte = path.resolve(__dirname,'content','subFolder','text.txt');
console.log(absoulte);

