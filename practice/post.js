const newProduct=[
    {title: "pen", price: 10},
     {title: "phone", price: 10000},
      {title: "book", price: 100}
]

async function addProduct() {
    for(let i=0; i< newProduct.length; i++){
        const response= await fetch("https://fakestoreapi.com/products",{
            method: "POST",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(newProduct[i])
        });

        const data= await response.json();
        console.log("product add:", data);
    }
}
addProduct();