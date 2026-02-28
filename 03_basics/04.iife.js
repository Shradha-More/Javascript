
// Immediately Invoked Function Expression (IIFE)

(function chai(){  // namred iife
    console.log("Hello World");
})();

// ()();  // IIFE ends here (execution call) by semicolon

(  () => {
    console.log("Hello from arrow function IIFE");
}  )();  // IIFE ends here (execution call)


(  (name) => {
    console.log(`Hello from arrow function IIFE ${name}`);
}  )("Shraddha");  // IIFE ends here (execution call)