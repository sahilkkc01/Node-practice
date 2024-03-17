function greet(){
    return function(){
        console.log("funtion returning a function");
    }
}

const result=greet();

result();