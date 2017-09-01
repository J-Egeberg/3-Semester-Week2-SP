
function clickHandler(){
         var promise = fetch('PersonServlet');
     promise.then(function (response) {
       return response.json();
     }).then(function (persons) {
        var tableRowsArray = persons.map(function(p){
           return "<tr><td>"+p.firstName+"</td></tr>"; 
        });
        document.getElementById("tbody").innerHTML = tableRowsArray;
        
     });
}

document.getElementById("btn").onclick=clickHandler;