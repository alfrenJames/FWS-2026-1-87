function applyDiscount(totalAmount){
    if(totalAmount>=200){
        var discountedPrice = totalAmount * 0.8;
        return discountedPrice;
    }
    else if(totalAmount>=100){
        var discountedPrice = totalAmount * 0.9;
        return discountedPrice;
    }
    else{
        return totalAmount;
    }
}
console.log (applyDiscount(150));
