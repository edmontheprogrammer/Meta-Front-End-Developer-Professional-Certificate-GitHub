function concatStrings(strA, strB) {
    return strA + strB; 
}

// concatStrings("abc", "def"); // returns: "abcdef" which is a string and the correct 
// // datatype 
// concatStrings(1, 2); // returns: "3" which is an integer instead of a string which is a 
// wrong datatype to cancatenate

// concatStrings("world", "wide"); // "worldwide"
// concatStrings("123", "456"); // "123456"
// concatStrings(1, 2); // 3 <--- oops! This isn't suppose to happen because it's getting 
// the total of both integers instead of outputting //12

// JEST is a testing framework you can use to test your codes in JavaScript 
// Here is an example of testing the "concatStrings()" function above to make sure it
// returns the expected results.
expect(concatStrings("abc", "def")).toBe("abcdef"); 

// This test will fail because I am expecting to get 12 but the function 
// performs addition of 1 and 2
expect(concatStrings(1, 2)).toBe(12); 