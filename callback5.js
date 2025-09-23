function fetchData(callback){
 console.log("fetching data")

 setTimeout(()=>{
    let userData={
        name: "snow",
        class: 12
    }
    callback(userData);
 },3000)
}
function showData(userData){
    console.log("data fetched successfully",userData);
}
fetchData(showData);