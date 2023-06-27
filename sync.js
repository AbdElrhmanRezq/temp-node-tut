const {readFileSync, writeFileSync, writeFile}=require('fs');
console.log('start')
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

//console.log(first,second);
writeFileSync('./content/newFile.txt','Resualt:'+first+second,{flag:'a'}); //a for appending new data
//const newFile = readFileSync('./content/second.txt','utf-8');
console.log('Done with my work')