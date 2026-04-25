<?php

// 1. ABSTRACTION: We define a general concept, but you can't buy a "Product"
abstract class Product {
    protected $name; // 2. ENCAPSULATION: protected so only children can see it
    protected $price;

    public function __construct($name, $price) {
        $this->name = $name;
        $this->price = $price;
    }

    // Every product MUST have a display, but we don't know the layout yet
    abstract public function displayInfo();
}

// 3. INHERITANCE: Shoe "is a" Product
class Shoe extends Product {
    private $size;

    public function __construct($name, $price, $size) {
        parent::__construct($name, $price); // Pass data to the Parent
        $this->size = $size;
    }

    // 4. POLYMORPHISM: Shoe provides its own version of displayInfo
    public function displayInfo() {
        return "👟 Shoe: $this->name | Size: $this->size | Price: $$this->price";
    }
}

// Use it!
$myItem = new Shoe("Nike Air", 120, 10);
echo $myItem->displayInfo();
?>
