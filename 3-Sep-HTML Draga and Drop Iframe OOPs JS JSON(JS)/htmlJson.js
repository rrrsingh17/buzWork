function jsonFile(){
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const obj = request.response;
   header(obj);
   section(obj);
}}

function header(obj){
const squadName=obj['squadName'];
const homeTown=obj["homeTown"];
const formed= obj["formed"];
const secretBase=obj["secretBase"];
const active=obj["active"];

var htmlStr=`<div class="demo1"><center>Squad Name: ${squadName} </center></div><br>
             <div class="demo1"><center>Hometown: ${homeTown}||Formed: ${formed} </center></div>`;
document.getElementById("demo").innerHTML=htmlStr;
}
function section(obj){
const sectionVar=obj["members"];
var htmlStr2=`<div class="container">`;
var htmlStr3="",htmlStr4="",htmlStr5="";
for(var i=0;i<sectionVar.length;i++){
htmlStr3=`<div class="column${i}"><h1>${sectionVar[i].name}</h1><br>Secret identity:${sectionVar[i].secretIdentity}<br>
          Age :${sectionVar[i].age} <br> Superpower:<br>`;
          var power=sectionVar[i].powers;
          for(var j=0;j<power.length;j++){
          htmlStr4+=`${j+1}). ${power[j]} <br>`
          }
          htmlStr4+=`</div>`
          htmlStr5+=htmlStr3+htmlStr4;
          htmlStr4="";
}
var htmlStr1=htmlStr2+htmlStr5;
console.log(power.length);
document.getElementById("demo2").innerHTML=htmlStr1;
}
htmlStr2=10;
console.log(htmlStr2)