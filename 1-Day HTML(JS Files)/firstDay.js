function login(){
var valueOfLoginId=0,valueOfPassword=0;
valueOfLoginId=document.getElementById("loginId").value;
valueOfPassword=document.getElementById("password").value;
if(valueOfPassword==="123456"){
if(valueOfLoginId==="3214"){
alert("welcome");
let person={
first_name:"Ravi",
last_name: "Singh",
phone_number:{
mobile:'12321',
landLine:"232112"
}}
console.log(person.phone_number.mobile);
console.log(person.phone_number.landLine);
}}
else{
alert("Invalid User");
}
}


function signup(){
var first_name1=document.getElementById("fname").value;
var last_name1=document.getElementById("lname").value;
var customer_number=document.getElementById("cNumber").value;
var department_name=document.getElementById("dname").value;
console.log(first_name1,last_name1,customer_number,department_name);
var res=checkData(first_name1,last_name1,customer_number,department_name);
if(res==true){
homePage(first_name1,last_name1,customer_number,department_name);
}
}

function homePage(first_name1,last_name1,customer_number,department_name){
var str=`Welcome  ${first_name1} ${last_name1} <br> Contact Number: ${customer_number}`;
document.getElementById('dataSource').innerHTML = str;
}


function checkData(first_name1,last_name1,customer_number,department_name){
if(first_name1=='' || last_name1 == '' || customer_number=='' || department_name==''){
document.getElementById('dataSource').innerHTML = "Error <br>Please Enter Proper Detail";
return false;
}
return true;
}