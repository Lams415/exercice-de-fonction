//exercice 1
function carré(nombre) {
    return nombre * nombre;
  }
  
 
var x, y, z, a;

x = carré(4);
y = carré(12);
z = carré(10);
a = carré(5);

console.log(x, y, z, a);

// exercice 2 

function multiplication(nombre){
    return nombre +"0";
  }
  
 
var x, y, z, a;

x = multiplication(4);
y = multiplication(12);
z = multiplication(10);
a = multiplication(5);

console.log(x, y, z, a);

// exercice 3


function addition (nom){
    return nom +"s";
  }
  
 
var q, d;

q = addition("voiture");
d = addition("maison");


console.log(q, d,);

// exercice 4

 function fac(n) {
  
    if (n > 5) return 5;
    else return  n * fac(n - 2);
  };

 var w;
 w = fac(4);
console.log(w);
