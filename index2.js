function greet(name, callback){
    console.log("hello", " "+ name)
    callback();
}
function sayBye(){
    console.log("goodBye")
}
greet("sachin", sayBye);