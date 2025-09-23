async function fetchData() {
    try {
        console.log("fetching")
        let response = await fetch("https://api.publicapis.org/entries")
        let user= await response.json();
        console.log("data recived:", user);
    } catch (error) {
        console.log("error:", error);
    }    
}

fetchData();