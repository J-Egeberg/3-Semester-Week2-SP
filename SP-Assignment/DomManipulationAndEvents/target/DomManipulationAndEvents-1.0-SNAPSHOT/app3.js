/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var UL = ["Peter", "Jens", "casper"];

var ul = UL.map(function (UL1) {
    return document.getElementById("myUL").innerHTML = ("<td><tr>" + UL1 +"</tr></td>");
});

ul.forEach(function (e) {
   return document.getElementById("myUL").innerHTML = ("<td><tr>" + ul +"</tr></td>");
});

