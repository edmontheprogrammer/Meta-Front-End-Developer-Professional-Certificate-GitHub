// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
     var price; 

    dishData.forEach( function (arrayItem) {
        var finalPrice; 
        price = arrayItem.price;
        console.log(price)
        if (taxBoolean) {
            finalPrice = price * tax; 
        } else {
            console.log("You need to pass a boolean to the getPrices call!");
        }
        console.log("Dish: ", arrayItem.name, "Price: $", finalPrice); 
    })
    
}

taxBoolean = true

getPrices(taxBoolean)



// Implement getDiscount()
function getDiscount() {
    
}

// Call getDiscount()
