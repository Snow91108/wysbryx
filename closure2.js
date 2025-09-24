function fetchData(url, callback) {
    let message="fetching data from"+ url;

    setTimeout(() => {
        callback(message);
    }, 2000);
}
fetchData("https://dummy-json.mock.beeceptor.com/todos", function(msg){
    console.log(msg)
})