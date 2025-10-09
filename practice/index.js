const API_URL= 'https://fakestoreapi.com/products';

//get

async function getProduct() {
    try{
        const response= await fetch(API_URL);
        const data= await response.json();
        console.log("all products:",data)
    }catch(error){
        console.error("error fetching data:", error);
    }
}

//post

async function addProduct() {
    try {
        const newProduct={
            title: "pen",
            price: 10,
            description:"blue ball pen",
            category:"stationary"
        };

        const response= await fetch(API_URL,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(newProduct)
        });

        const data= await response.json();
        console.log("new product :",data);
        return data.id;
    } catch (error) {
      console.log("error in adding data:", error)  
    }
 }
// getProduct();
addProduct()