
getName();
/* Here what we are exactly doing tryig to access getName 
   even before we have initialize
*/

console.log(x);
// And even we are trying access x , even we have not putted the value into x

/* In other programming language it will provide an error 
   and what will JS do it . it will provide an special value i.e undefine
*/

var x = 7;

function getName() {
    console.log("Namaste Javascript")
}



// output on the console will be
// Namaste Javascript
// undefined