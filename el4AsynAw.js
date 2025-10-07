async function demo() {
    console.log("a");
    await Promise.resolve();
    console.log("b")
}

console.log("c")
demo();
console.log("d")