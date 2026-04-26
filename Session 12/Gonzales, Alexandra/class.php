<?php

class Product {
    private $name;
    private $quantity;

    public function __construct($name, $quantity) {
        $this->name = $name;
        $this->quantity = $quantity;
    }

    public function sell($amount) {
        if ($amount <= $this->quantity) {
            $this->quantity -= $amount;
            echo "Sold $amount item(s) of {$this->name}. Remaining stock: {$this->quantity}";
        } else {
            echo "Not enough stock for {$this->name}. Available: {$this->quantity}";
        }
    }
}

// 🔹 Creating an object (instantiating)
$product1 = new Product("Laptop", 10);

// 🔹 Using the object
$product1->sell(12);

?>