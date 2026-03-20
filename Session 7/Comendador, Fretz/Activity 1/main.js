const shoe = {
    price: 2500,
    brand: "Nike"
  };
  
  let isMember = true;
  
  if (isMember) {
    let discountedPrice = shoe.price * 0.9;
    console.log("Discounted Price:", discountedPrice);
    
  } else {
    console.log("Original Price:", shoe.price);
  }