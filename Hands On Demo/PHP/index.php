<!DOCTYPE html>
<html lang="en">
<?php
//initial variable
    $name = "alfren";
    $age = 4 + 23;
    $colors = array("red", "green", "blue");

?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    h1 {
        color: red;
    }
    </style>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>This My page running in a server</h1>
    <?php 
        echo "Hi My name is: " . $name . "<hr>";
        echo "My age is:" . $age + 23 . "<br>";

        foreach($colors as $key=> $value){
            echo "<span style='color: yellow;'> $value </span> <br>";    
        }

        if($age>=18){
            echo "<h2 style='color: cyan'>Your old!! $name</h2>";
        }else{
            echo"<h2 style='color: green'>Your not old!! $name</h2>";
        }
    ?>
    <button onclick="sayHi()" style="background-color: pink;">
        <?php
            echo "this button render by the server"
        ?>
    </button>
    <script>
    function sayHi() {
        alert("<?php echo 'Hi ' . $name?>");
    }
    </script>
</body>

</html>
