/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 
function clickHandler(event){
    document.getElementById("outher").onclick = function(event){
    //console.log("Hi from " +event.target.id);
    document.getElementById("p").innerHTML=("Hi from "+event.target.id);
    }
}    


    //console.log("Hi from div1");
    //var sayHi2 = document.getElementById("div2").console.log("Hi from div2");
document.getElementById("outher").onclick = clickHandler;



