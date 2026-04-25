<?php


// Activity 1
    $patientName = "John";
     $appointmentTime = "1200";
     $clinicStatus = array("isOpen" => true, "appointmentTime" => 1600 );


     if ($appointmentTime >= 900 && $appointmentTime <= 1800){
        echo "Appointment for  " . $patientName . "  on  " . $appointmentTime . "  is confirmed";
     }
     else 
            {
            echo "Clinic is closed!";
        }



// Activity 2
    $actions = array("Check-up", "X-ray", "Pharmacy");

  echo "<h1>";
foreach ($actions as $action) {
    echo "<li>" . $action . "</li>";
}
echo "</h1>";



?>