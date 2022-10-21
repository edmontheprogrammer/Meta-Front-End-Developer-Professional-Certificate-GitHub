
/*
    * Creating a function named 'letterFinder()' that takes in two 
        input parameters: 'word' and 'match'
    * The method body has a for-loop that iterates over the length of the 
        word. 
    * The if statment checks if the letters in the word matches the 'match'
        or second parameter being passed in. 
    * This function 'letterFinder()' is basically implementing the linear
        sort algorithm, so you already understand it. But the only 
        difference is that it it using the 'if-statments' instead of the 
        'return statments'. 
*/
function letterFinderMyImplementation(word, match) {
    if ( (word.length >= 2) && (match.length == 1) ) {
        if( (typeof(word) == 'string') && (typeof(match) == 'string') ) {
            for (i = 0; i < word.length; i++) {
                if(word[i] == match) {
                    console.log('Found the', match, 'at', i)
                } else {
                    console.log('---No match found at', i)
                }
            }
        }
    } else {
        console.log('Please pass correct arguments to the function.')
    }
}

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2
    var condition2 = typeof(match) == 'string' && match.length == 1

    if (condition1 && condition2) {
        for (i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function")
    }
}

//letterFinder(2, 7)
// letterFinder('cat', 'c')
// letterFinder('Edmon', 'm')

letterFinderMyImplementation(2, 7)
letterFinderMyImplementation("cat", 'c')
letterFinderMyImplementation("Edmon", 'o')


