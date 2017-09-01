var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

var all = boys.concat(girls);

all.join();

all.join('-');

all.push("Lone", "Gitte");

all.unshift("Hans", "Kurt");

all.shift("Hans");

all.pop("Gitte");

all.splice(3, 2);

all.reverse()

all.sort();

console.log(all);