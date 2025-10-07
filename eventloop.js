console.log("one");

console.log("two");

function logThree() {
    console.log("three");
}

function logThreeAndFour(){
    logThree();
    console.log("four");    
}

logThreeAndFour();

