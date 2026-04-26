<!DOCTYPE html>
<html lang="en">
<?php
//initial variable
    $patientName = array("john", "jane", "joe");
    $appointmentTime = 1900;
    $clinicStatus = ["isOpen" => true, "totalDoctors" => 3];
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
    <!-- <link rel="stylesheet" href="style.css"> -->
</head>
<body>
    <h1>Clinic Dashboard</h1>
    <?php 
       if ($clinicStatus["isOpen"] === true && $appointmentTime < 2300) {
            echo "Appointment confirmed for " . $patientName[2];
        } else {
            echo "Clinic is currently closed.";
        }
    ?>
    <?php
    $services = array("Checkup", "X-Ray", "Pharmacy");

    echo "<ul>";
    foreach ($services as $service) {
    echo "<li>" . $service . "</li>";
    }
    echo "</ul>";
    ?>

</body>
</html>

