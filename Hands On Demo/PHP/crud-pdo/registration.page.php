<?php
require_once('upload.class.php');

$message = '';
$newFileName = '';
$clsMsg = '';

$uploader = new UploadManager();
$uploadResult = $uploader->process();

$message = $uploadResult['message'];
$clsMsg = $uploadResult['clsMsg'];
$newFileName = $uploadResult['fileName'];
?>
<!DOCTYPE html>
<html lang="en">

<?php include "header.php"?>

<body>
    <div class="container">
        <h1>REGISTRATION</h1>
        <form method="post" enctype="multipart/form-data">
            <div class="input-group mb-3">
                <?php echo "<span class='{$clsMsg }'>{$message}</span>"; ?>
                Upload a File:<br><input type="file" name="uploadedFile" />
                <input type="submit" name="uploadBtn" value="Upload" />
            </div>
        </form>
        <form action="add.php" method="post">
            <div class="input-group mb-3">
                <span class="input-group-text" id="photo">Avatar</span>
                <input type="text" name="photo" id="photo" class="form-control" placeholder="upload image"
                    value="<?= $newFileName?>" aria-describedby="photo">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="firstName">First Name</span>
                <input type="text" name="firstName" id="firstName" class="form-control" placeholder="Enter First Name"
                    aria-describedby="firstName">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="lastName">Last Name</span>
                <input type="text" name="lastName" id="lastName" class="form-control" placeholder="Enter Last Name"
                    aria-describedby="lastName">
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="address">Location</span>
                <input type="text" name="address" id="address" class="form-control" placeholder="Enter Location"
                    aria-describedby="address">
            </div>
            <input type="submit" value="Save" name="save" id="save" class="btn btn-primary" />
        </form>
    </div>
</body>

</html>