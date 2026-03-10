
let isMember = true;

let ShoeName1 = {
    Price: 100000 ,
    Brand: "Loewe X" ,
}

if (isMember==true){
    
    console.log("Your discounted total price is:", ShoeName1.Price*0.90, "for", ShoeName1.Brand)
}
else{

    console.log("Your total price is:", ShoeName1)
}