let inventory = [10, 0, 5, 2, 0];
for(let i=0; i<inventory.length; i++){
    // console.log(inventory[i]);
    if(inventory[i] === 0){
    console.log(inventory[i] + " Out of Stock");
    }
    else if(inventory[i]< 5){
    console.log(inventory[i] + " Low Stock -Reorder Soon!");
    }
    else {
    console.log(inventory[i] + " Stock is Healthy");
    }
}

