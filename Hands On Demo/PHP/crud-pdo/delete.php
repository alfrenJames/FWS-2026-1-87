<?php
require_once("registration.class.php");
$record = new registration();
if(isset($_GET['id']) && isset($_GET['req'])){
    if($_GET['req'] == "delete"){
        $record->set('id', $_GET['id']);
        $record->deleteRecord();
        echo "<script>
            alert('Record DELETED!!❌');
            document.location='index.php';
            </script>";
    }
}
?>