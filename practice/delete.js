const idsToDelete =[1,2,3];

async function deleteProduct() {
   for(let i=0; i<idsToDelete.length; i++){
    const response= await fetch(`https://fakestoreapi.com/products/${idsToDelete[i]}`,{
        method: "DELETE"
    });
    const data= await response.json();
    console.log(`deleted product ${idsToDelete[i]}:`, data);
   } 
}

deleteProduct();