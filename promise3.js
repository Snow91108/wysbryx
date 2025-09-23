function calculateNum(a,b){
    return new Promise((resolve, reject) => {
        console.log("calculating numbers")
            if(typeof a==="number" && typeof b==="number"){
                resolve(a+b)
            }else{
                reject("you entered a wrong input")
            }
    })
}

calculateNum(20,30)
.then((sum)=>{
    console.log("sum is:", sum)
})
.catch((err)=>{
    console.log("there is an error:",err)
})