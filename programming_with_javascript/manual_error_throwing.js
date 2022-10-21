
/*
    * The following code throws an error using the ReferenceError()
        object. We throw this error using the following 
        'throw new ReferenceError()'. We use the try{} catch() {}
        block to handle the error being thrown by this line 
        the try {} block tries to run the code. ... which it basically 
        generates an error. the error is being generated using the 
        new keyword and a constructor named 'ReferenceError()'
        then the catch() {} block catches the error using the 'err' 
        . the err is an object. it basically stores any err that the 
        try {} block generates. 
        After that, we can do whatever we want to do with the error 
        (err). In this case we are simply outputting the error to the 
        console. using the "console.log(err)" statement. 

*/
try {
    throw new ReferenceError();
} catch(err) {
    // this line throws the error using the console.log(err) statment
    console.log(err)
    // This line simply outputs or prints the statment 
    // 'There was a Reference Error'
    console.log('There was a Reference Error')
}
console.log("My program does not stop")