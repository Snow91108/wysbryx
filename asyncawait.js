function addNum(a,b){
    return new Promise((resolve, reject) => {
        if(typeof a==="number" && typeof b==="number"){
            setTimeout(()=>
                resolve(a+b)
            ,2000)
        }else{
            reject("you entered a wrong in put")
        }
    })
}

async function main() {
    try {
        console.log("calculating")
        const sum =await addNum(10,20);
        console.log("sum:", sum)
    } catch (error) {
        console.log("error:", error)
    }
    
}

main();