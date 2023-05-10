const fs = require('fs').promises
fs.readFile('./sample.txt')
.then((data)=>{
    console.log(data.toString());
})
.catch((err)=>{
    console.log(err);
})