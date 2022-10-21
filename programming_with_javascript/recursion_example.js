function example1() {
    console.log('line one'); 
    console.log('line two');
    console.log('line three');
}

// example1();

counter = 3; 

function example2() {
    console.log(counter)
    counter = counter - 1; 
    if (counter === 0) return 0; 
    example2(); 
}
