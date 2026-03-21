
let shoe = {
    brand: "Adidas",
    size: 40,
    isAvailable: true,
    stock: 0
  };
  
  if (shoe.stock === 0) {
    shoe.isAvailable = false;
    console.log("Out of Stock!");
  } 
  else if (shoe.stock > 0) {
    console.log("We have " + shoe.stock + " pairs of " + shoe.brand + " shoes left!");
  }