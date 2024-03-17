const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url == '/home'){
        res.end("Home");

    }else if(req.url=='/welcome'){
        res.end("Welcome");

    }else{
        res.writeHead(404);
        res.end("You are trying to hit wrong url");
    }
})

//server start

server.listen(8000,()=>{
    console.log("Server Started");
})