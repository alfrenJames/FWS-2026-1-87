// function gradeChecking(grade){
//     // if(grade>=100) {
//     //     console.log("Grade: "+ grade + " This grade is out of range!");
//     // }else if(grade>=75){
//     //    console.log("Grade: "+ grade + " Passed");
//     // }else{
//     //    console.log("Grade: "+ grade + " Failed");
//     // }
//     var gradeResult = (grade>=75) ? "Passed" : "Failed";
//     console.log(gradeResult);
// }

// const gradeChecking = function(grade){
//      var gradeResult = (grade>=75) ? "Passed" : "Failed";
//     console.log(gradeResult);
// }

var gradeResult = 0;
const gradeChecking = (grade) =>  gradeResult = (grade>=75) ? "Passed" : "Failed";
module.exports ={gradeChecking};
