const products=[
    {id:1, title:"updatedProduct1", price:25},
    {id:2, title:"updatedProduct2", price:30},
    {id:3, title:"updatedProduct3", price:90},
];

async function productsToUpdate() {
    for(let i=0; i< products.length; i++){
        const product=  products[i];

        const response = await fetch(`https://fakestoreapi.com/products/${product.id}`,{
            method: "PUT",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                title:product.title,
                price:product.price
            }),
        });
        const data =await response.json();
        console.log(`Product ${product.id} updated:`,data);
    }
}
productsToUpdate();