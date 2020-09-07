function sumOfArray(){
var arr=document.getElementById("array").value;
arr=arr.split(" ");
var sum=0;
for(var i=0;i<arr.length;i++){
sum=sum+parseInt(arr[i]);
}
var res=`Result : ${sum}`
console.log(res);
document.getElementById("result").innerHTML=res;
}