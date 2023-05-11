const fs = require('fs')
fs.readFile('./Ezenagu.pdf',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
})