let shoeStocks = {
    brand : ["Puma", "Nike", "Addidas", "Lacoste", "ON", "Gucci", "Keds", "Uniqlo", "Hoka", "Sketchers"],
    size : 10,
    isAvailable: true,
    stock: 50,
};
let specificBrand = shoeStocks.brand;

// console.log (shoeStocks.size, shoeStocks.isAvailable, shoeStocks.stock, shoeStocks.brand [2])
// console.log (specificBrand [5])

// let stock = 2
if(shoeStocks.stock<=0){
    console.log(specificBrand [5] + " is Out of Stock");
}
else if(shoeStocks.stock>=0){
    console.log("We have " + shoeStocks.stock + " pairs of " + specificBrand [5] + " shoes left!");
}