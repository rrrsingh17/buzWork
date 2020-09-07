function onBlur(){
var y=document.getElementById("name");
y.value=y.value.toUpperCase();
}

function onChange(){
var x= document.getElementById("car").value;
document.getElementById("data").innerHTML="Selected Car is"+ x;
}

function onFocus(id){
document.getElementById(id).style.background = "yellow";
}

function onInput(id){
var x= document.getElementById(id).value;
document.getElementById("onWrite").innerHTML="You Wrote "+x;
}

function onSubmit(){
alert("The data is Submitted")
}