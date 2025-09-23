let myPromise= new Promise((resolve, reject) => {
    let success = false;
    
    setTimeout(()=>{
        if(success){
            console.log("operation success")
        }else{
            console.log("operation failed")
        }
    },2000)
});

myPromise
.then((result)=>{
    console.log(result); 
})
.catch((error)=>{
    console.log(error);
})