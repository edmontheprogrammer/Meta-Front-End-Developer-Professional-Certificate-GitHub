/**
 * 
 * Test driven development: 
 *  Test driven development or TDD is a streamlined process of writing code that will 
 *  satisfy some requirements. 
 * 
 * Here is an example to understand how TDD works. Consider the following real life 
 * situation, Suppose you have to perform a task, drive your car to work. 
 * You leave your house and walk up to your car, only to find out that you don't 
 * have your car keys with you. Then you remember that you left your car keys in the 
 * cabinet and you simply forgot to take them what you did there. In this imagined 
 * scenario is the opposite of the Test Driven Development (TDD). 
 * You first walk to your car and only then you chekc if you have your car keys. 
 * If you did these things using the TDD approach, you would do the following first.
 * First  you check or test if you have your keys with you. Your test fails because 
 * you don't have them. They're in the cabinet. Then you perform the action of getting 
 * your keys from the cabinet. Finally, you check or test if you have your keys this 
 * time you have them. So your test now passes. What is described here is the essence 
 * of TDD. 
 * 
 * Let's go through these steps again this time, pretend that you're implementing TDD
 *  in your code. Imagine  that you need to write code in a test driven way. Since 
 * you're coding the TDD way you first write the test, even before you've written 
 * any actual implementation, for for example, you test if a function named status of 
 * keys exists
 * 
 * test('returns true if statusOfKeys exists', function() {
 *      expect(statusOfKeys).toBeDefined()
 * } )
 * 
 * You then use some testing functions from a testing framework. Since you haven't 
 * written your source code implementation, the test fails. Next you run your test, 
 * the test fails because there's no status of keys function declared. 
 * The logic of your test code is expect that the function status of keys exists in your
 * source code. 
 * In your source code you declare a function named "statusOfKeys". You run the test 
 * again and it checks if such a function exists. So the test passes, it's important 
 * to note that one of the rules of TDD is that you should write as little code as 
 * possible to make the test pass.  
 */


