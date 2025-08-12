const fs = require('fs');

const data = fs.readFileSync('./readme.md','utf-8');

const wordcount = data.split(' ').length;

const reactcount = wordcount.

console.log(wordcount);