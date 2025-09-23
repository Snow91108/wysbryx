function fetchData(callback){
    console.log("fetching data")

setTimeout(()=>{
    let user={
        id:101,
        name:"john",
        phoneNo:34555515117};
    callback(user);
},3000)
}
function userData(user){
    console.log("data Recived",user)
}
fetchData(userData)

