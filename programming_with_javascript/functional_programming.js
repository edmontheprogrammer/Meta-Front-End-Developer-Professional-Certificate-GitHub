// functional programming
/*
    You are converting 'currencyOne' to 'currencyTwo'. 
*/
//this is currencyOne which is equal to 100
var currencyOne = 100; 
var currencyTwo = 0; 
var exchangeRate = 1.2; 

function convertCurrency(amount, rate) {
    return amount * rate; 
}

//this is currencyTwo which is equal to return value of 'amount * rate'
currencyTwo = convertCurrency(currencyOne, exchangeRate);