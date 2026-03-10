let shoe = {
  brand: ['nike', 'addidas','puma','salomon','on','new balance','world balance','hoka','lacoste','ASICS'],
  size: [10, 11, 12, 9, 8, 9, 10, 11, 10.5, 7],
  isAvailable: true,
  stock: 12
};
if (shoe.stock === 0){
  isAvailable === false;
  console.log('Out of Stock!');
} else {
  console.log(`We have ${shoe.stock} pairs of size ${shoe.size[4]} ${shoe.brand[8]} shoes left!`);
};
