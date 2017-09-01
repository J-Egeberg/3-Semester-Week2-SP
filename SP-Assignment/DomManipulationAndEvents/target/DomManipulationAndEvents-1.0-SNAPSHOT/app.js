/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

for (var i = 0; 3 > i; i++){
    document.getElementsByTagName("div")[i].style.backgroundColor = "red";
}

function clickHandler() {
    var changeCollor = document.getElementById("div1").style.backgroundColor="yellow";
    var changeCollor = document.getElementById("div2").style.backgroundColor="green";
    var changeCollor = document.getElementById("div3").style.backgroundColor="blue";
    
    
}
    document.getElementById("btn").onclick = clickHandler;

