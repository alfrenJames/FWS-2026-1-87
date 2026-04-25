<?php
class EmployeeRecord{
    const br = "</br>";
    //define properties
    public $name, $position, $company, $salary, $photo;
    public $dir = "img/";
    //access//getter
    function getEmployeeRecord(){
        echo "<p class='card-text'>Name: {$this->name}</p>";
        echo "<p class='card-text'>Position: {$this->position}</p>";
        echo "<p class='card-text'>Company: {$this->company}</p>";
        echo "<p class='card-text'>Salary: {$this->salary}</p>";
        echo "<img src='{$this->dir}{$this->photo}'>";
        echo "</div>";
    } 
    //setter/mutator
    function setEmployeeRecord($name, $position, $company, $salary, $photo){
        $this->name = $name;
        $this->position = $position;
        $this->company = $company;
        $this->salary = $salary;
        $this->photo = $photo;
    }
}
?>