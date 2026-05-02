<?php
require_once('registration.class.php');
if(isset($_POST['save'])){
   
    $addUser = new registration();
    $addUser->set('firstName', $_POST['firstName']);
    $addUser->set('lastName', $_POST['lastName']);
    $addUser->set('address', $_POST['address']);
    $addUser->set('photo', $_POST['photo']);
    $addUser->addNewRecord();
    echo "<script>alert('New Record Addeded to the Database➕✅');document.location='index.php'</script>";
}
?>