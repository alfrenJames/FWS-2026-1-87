<?php
class Shoe {
    // Properties (What the shoe HAS)
    public $brand;
    public $price;

    // Constructor (Runs automatically when we create a new shoe)
    public function __construct($brand, $price) {
        $this->brand = $brand;
        $this->price = $price;
    }
  
    // Method (What the shoe DOES)
    public function getInfo() {
        return "This is " . $this->brand . " costing $" . $this->price . "<br>";
    }
}

// Creating an Object (Instantiating)
$myShoe = new Shoe("Nike Air", 120);
echo $myShoe->getInfo(); 

$myShoe = new Shoe("Puma", 140);
echo $myShoe->getInfo(); 

$myShoe = new Shoe("Addidas", 130);
echo $myShoe->getInfo(); 
?> 

 