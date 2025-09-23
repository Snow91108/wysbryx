function fetchData(){
   return new Promise((resolve, reject) => {
        console.log("data fetching")
        setTimeout(()=>{
            let data={
                id:333,
                name:"shetty"
            }
            if(data) resolve(data);
            else reject("data not found")
        },3000)
    })
}

fetchData()
.then((data)=>{
    console.log("your data:", data)
})
.catch((err)=>{
    console.log("error:", err)
})