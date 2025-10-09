async function getAllData() {
    try {
        const [productsResponse, usersResponse]= await Promise.all([
            fetch('https://fakestoreapi.com/products'),
            fetch('https://fakestoreapi.com/users')
        ]);

        const[products, users]= await Promise.all([
            productsResponse.json(),
            usersResponse.json()
        ]);

        console.log("products:", products);
        console.log("users:", users);
    } catch (error) {
        console.log("error:", error);
    }
}

getAllData();