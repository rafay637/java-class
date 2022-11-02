var a = prompt("how are you");
console.log(a);


// Bio Data start
var FirstName = prompt("Enter first name");
var lastName = prompt("Enter last name");
var city = prompt("Enter city");
console.log(FirstName);
console.log(lastName);
console.log(city);
// Bio Data end


// Result start
var subject1 = +prompt("enter english number : " + " /100");
var subject2 = +prompt("enter math number : " + " /100");
var subject3 = +prompt("enter physics number : " + " /100");
var subject4 = +prompt("enter computer number : " + " /100");
var subject5 = +prompt("enter urdu number : " + " /100");
var total = subject1 + subject2 + subject3 + subject4 + subject5;
var percentage = total / 500 * 100;

alert("Total Obtained Marks Are : " + total);
alert("Congrats! Your Percentage Is : " + percentage + "%");

if (percentage == 100) {
    alert("TOP")
} else if (percentage >= 80 && percentage < 100) {
    alert("A+")
} else if (percentage >= 70 && percentage < 80) {
    alert("A")
} else if (percentage >= 60 && percentage < 70) {
    alert("B")
} else if (percentage >= 50 && percentage < 60) {
    alert("C")
} else if (percentage >= 40 && percentage < 50) {
    alert("D")
} else {
    alert("FAILED")
}
// Result end


// officer documentation start
var officer = "false";
var assistant = "true";

if ("officer == false") {
    console.log("File submitted to officer")
} else if ("assistant == true") {
    console.log("File Submitted to assistant")
} else {
    console.log("pehli fursat ma nikal")
}
// officer documentation end


// student ID card start
var age = prompt("enter your age");
var studentcard = false;

if (age >= 18) {
console.log("student allow")
} else if ("student card == false") {
    console.log("student allow on basis of card")
} else {
    console.log("not allow")
}
// student ID card end


// Arrays start
var car1 = "bugatti";
var car2 = "lamborgini";
var car3 = "mustang ford";
var car4 = "civic";
var car5 = "GTR";

var cars = ["bugatti", "lamborgini", "mustang ford", "civic", "GTR"];

console.log(cars[4]);
// Arrays end