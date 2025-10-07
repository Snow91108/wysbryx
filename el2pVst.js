console.log("start")

setTimeout(() => {
    console.log("hello")
}, 0);

Promise.resolve().then(()=> console.log("promsie"));

console.log("end");