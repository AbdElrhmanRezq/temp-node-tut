const {readFile,writeFile}=require('fs');
console.log('start');
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        return "error";
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            return 'error';
        }
        const second = result
        writeFile('./content/resualt-async.txt','resualt:'+first+second,(err,result)=>{
            if(err){
                console.log('err');
            }
            console.log('done with this task');
        });
    })
})
console.log('Starting second task');