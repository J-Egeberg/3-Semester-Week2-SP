//Javascript functions exercise 1-3

typeof n1 === "number" //Will fail if n1 is undefined, or is not a number
typeof callback === "function" //Will fail if callback is undefined or is not a function

function add(n1, n2){
return n1 +n2;
}

var sub = function(n1,n2){
return n1 - n2
}

function mul(n1,n2){
    return n1/n2;
}

function MyError(message) {
    this.name = 'MyError';
    this.message = message || 'Default Message';
    this.stack = (new Error()).stack;
  }

var cb = function(n1,n2, callback){
    try {
        if (typeof n1 === "number" && typeof n2 ==="number" && typeof callback === "function"){
            return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
        }
     throw new Error ('woops'); 
    }   catch (e) {
        console.log("There was an error");
      }
    
}

//console.log( add(1,2) )     // prints the number 3
//console.log( add )          // Prints function add without parameters since n1 and n2 is undefined
//console.log( add(1,2,3) ) ; // prints the number 3, the last parameter isnt expected and therefore isnt used in the function
//console.log( add(1) );	  //   prints error because of missing parameter (n2) 	
//console.log( cb(3,3,add) ); // prints our cb function return line 
//console.log( cb(4,3,sub) ); // prints our cb function return line
//console.log(cb(3,3,add())); // prints error.. method is already defined once
//console.log(cb(3,"hh",add));// prints our cb function return line "3+hh = 3hh"
//console.log(cb(3,3,mul));

//CallBack exercises...

var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

var filterNames = names.filter(function (name){
    return name.length<=3
});


console.log(filterNames);

names.forEach( function (Element){
//    console.log(Element)
});

filterNames.forEach( function (Element){
//    console.log(Element)
});

var UPPER = names.map(function (words){
    return words.toUpperCase();
});

console.log(UPPER);

names.forEach(function (element) {
    return console.log("<ul><li>" + element + "</li></ul>");
});

var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

var filterCars = cars.filter(function (car) {
    return car.id < 2000, car.make = "volvo", car.price > 5000;
});

function getCar(id, make, price) {
    var carId = [car.id, car.make, car.price].jo