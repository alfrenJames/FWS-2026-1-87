<?php
require_once("registration.class.php");
require_once("upload.class.php");

$data = new registration();
$id = $_GET['id'];
$data->set('id', $id);
$user= $data->getByID();
$val = $user[0];
if(isset($_POST['edit'])){
    $data->set('firstName', $_POST['firstName']);
    $data->set('lastName', $_POST['lastName']);
    $data->set('address', $_POST['address']);
    $data->set('photo', $_POST['photo']);
    echo $data->updateRecord();
    echo "<script>
            alert('Record Updated!💾✅');
            document.location='index.php';
            </script>";
}

$message = '';
$newFileName = '';
$clsMsg = "";

$uploader = new UploadManager();
$uploadResult = $uploader->process();

$message = $uploadResult['message'];
$clsMsg = $uploadResult['clsMsg'];
$newFileName = $uploadResult['fileName'];
if ($newFileName) {
    $val['photo'] = $newFileName;
}
?>
<!DOCTYPE html>
<html lang="en">
<?php include "header.php"?>

<body>
    <div class="container">
        <h1>Update Record</h1>
        <form method="post" enctype="multipart/form-data">
            <div class="input-group mb-3">
                <?php echo "<span class='{$clsMsg}'>{$message}</span>"; ?>
                Upload a File:<br><input type="file" name="uploadedFile" />
                <input type="submit" name="uploadBtn" value="Upload" />
            </div>
        </form>
        <form action="" method="post">
            <div class="input-group mb-3">
                <span class="input-group-text" id="photo">Avatar</span>
                <input type="text" name="photo" id="photo" class="form-control" placeholder="upload image"
                    value="<?php echo $val['photo'];?>" aria-describedby="photo">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="firstName">First Name</span>
                <input type="text" name="firstName" id="firstName" value="<?php echo $val['firstName'];?>"
                    class="form-control" placeholder="Enter First Name" aria-describedby="firstName">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="lastName">Last Name</span>
                <input type="text" name="lastName" id="lastName" value="<?php echo $val['lastName'];?>"
                    class="form-control" placeholder="Enter Last Name" aria-describedby="lastName">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="address">Location</span>
                <input type="text" name="address" id="address" value="<?php echo $val['address'];?>"
                    class="form-control" placeholder="Enter Location" aria-describedby="address">
            </div>
            <input type="submit" value="Update" name="edit" id="edit" class="btn btn-primary" />
        </form>
        <div class="input-group mb-3">
            AVATAR:
            <img src="uploads/<?= $val['photo']?>" alt="<?= $val['firstName']?>">
        </div>
    </div>
</body>

</html>