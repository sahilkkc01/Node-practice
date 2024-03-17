
const fs=require('fs');


//Asynchronus reading file
fs.readFile('input.txt',(err,content)=>{
    if(err){
        return console.log(err);
    }
    console.log("Read content is : " + content);
})


//Synchronus file reading
const content= fs.readFileSync('input.txt');
console.log("Read file content is : " + content);

console.log("hello from last");


//Writing in file

//Asynchronusly
fs.writeFile('output.txt',"This file is created asychronusly",err=>{
    if(err){
        return console.log(err);
    }
    console.log("Written Succefully");
})

//Synchronously 

fs.writeFileSync('output1.txt',"This file is create Synchronusly");
console.log("Hello from last");