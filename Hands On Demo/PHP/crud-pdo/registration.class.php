<?php
require_once('database.php');
class registration{
    //define properties
    private $id;
    private $firstName;
    private $lastName;
    private $address;
    private $photo;
    protected $dbCon;
    //constructor 
    public function __construct($id=0, $firstName="", $lastName="",$address="",$photo="")
    {
        $this->set('id', $id);
        $this->set('firstName', $firstName);
        $this->set('lastName', $lastName);
        $this->set('address', $address);
        $this->set('photo', $photo);
        
        try {
            $this->dbCon = new PDO(
                DB_TYPE.
                ":host=".DB_HOST.
                ";dbname=".DB_NAME,
                DB_USER,DB_PWD,[PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]
            );
        } catch (PDOException $error) {
            die("Database Connection Error: " . $error->getMessage());
        }
    } 
    public function set($property, $value){
        if (property_exists($this, $property)) {
            $this->$property = $value;
        }
    }
    public function get($property){
        if (property_exists($this, $property)) {
            return $this->$property;
        }
    }
    public function addNewRecord(){
        try {
            $sqlStament = $this->dbCon->prepare("INSERT INTO users(firstName,lastName,address,photo) VALUES(?,?,?,?)");
            $sqlStament->execute([$this->get('firstName'),$this->get('lastName'),$this->get('address'),$this->get('photo')]);
            // echo "<script>
            // alert('New Record Addeded to the Database➕✅');
            // document.location='index.php';
            // </script>";
        } catch (Exception $error) {
            return $error->getMessage();
        }
    }
    public function getAll(){
        try {
            $sqlStament = $this->dbCon->prepare("SELECT * FROM users");
            $sqlStament->execute();
            return $sqlStament->fetchAll(); 
        } catch (Exception $error) {
            return $error->getMessage();
        }
    }
    public function getByID(){
        try {
            $sqlStament = $this->dbCon->prepare("SELECT * FROM users WHERE id=?");
            $sqlStament->execute([$this->id]);
            return $sqlStament->fetchAll();
        } catch (Exception $error) {
            return $error->getMessage();
        }
    }
    public function updateRecord(){
        try {
            $sqlStament = $this->dbCon->prepare("UPDATE users SET firstName=?, lastName=?, address=?, photo=?  WHERE id=?");
            $sqlStament->execute([$this->get('firstName'),$this->get('lastName'),$this->get('address'),$this->get('photo'),$this->get('id')]);
            // echo "<script>
            // alert('Record Updated!💾✅');
            // document.location='index.php';
            // </script>";
        } catch (Exception $error) {
            return $error->getMessage();
        }
    }
    public function deleteRecord(){
        try {
            $sqlStament = $this->dbCon->prepare("DELETE FROM users WHERE id=?");
            $sqlStament->execute([$this->get('id')]);
            return $sqlStament->fetchAll();
            // echo "<script>
            // alert('Record DELETED!!❌');
            // document.location='index.php';
            // </script>";
        } catch (Exception $error) {
            return $error->getMessage();
        }
    }
}
?>