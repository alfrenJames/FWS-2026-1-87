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
            echo $amount . " item(s) sold successfully.<br>";
        } else {
            echo "Not enough stock available!<br>";
        }
    }

    public function showProduct() {
        echo "Product Name: " . $this->name . "<br>";
        echo "Remaining Quantity: " . $this->quantity . "<br><br>";
    }
}

$product1 = new Product("Laptop", 10);

$product1->showProduct();

$product1->sell(3); 
$product1->showProduct();

$product1->sell(8); 
$product1->showProduct();

?>