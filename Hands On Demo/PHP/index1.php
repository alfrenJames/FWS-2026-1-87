<?php
//initial variable
    $name = "alfren";
    $age = 4 + 23;
    $colors = array("red", "green", "blue");
     echo "Hi My name is: " . $name . "<hr>";
     echo "My age is:" . $age + 23 . "<br>";
     echo "
     <style>
     body{
        background-color: red;
     }
     </style>
     ";
    foreach($colors as $key=> $value){
        echo "<span style='color: yellow;'> $value </span> <br>";    
    }
    if($age>=18){
        echo "<h2 style='color: cyan'>Your old!! $name</h2>";
    }else{
        echo"<h2 style='color: green'>Your not old!! $name</h2>";
    }
        echo "
            <button onclick='sayHi()' style='background-color: pink;'>
            Click Me!
            </button>
            <script>
            function sayHi() {
                alert('Hi $name');
            }
            </script>
        ";
?>
