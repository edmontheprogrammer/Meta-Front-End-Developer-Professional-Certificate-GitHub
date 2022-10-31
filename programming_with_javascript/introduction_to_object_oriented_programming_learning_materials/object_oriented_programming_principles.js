/*
 * Object Oriented Programming Principles: 

    In this reading, you'll learn about the benefits of object-oriented programming (OOP) and the 
    OOP principles. 

    The Benefits of OOP: 

    There are many benefits to using the object-oriented programming (OOP) paradigm. 

    OOP helps develpers mimic the relationship between objects in the real world. In a way, it helps
    you to reason about the relationships between things in your software, just like you would in
    the real world. Thus, OOP is an effective approach to come up with solutions in the cod you write.
    OOP also:

        * Allows you to write modular code, 
        
        * Makes your code more flexible and 
    
        * Makes your code reusable 

    The Principles of OOP: 

    The four fundamental of OOP principles are inheritance, encapsulation, abstraction and 
    polymorphism. You'll learn about each of these principles in turn. The thing to remember about 
    Objects is that tey exist in a hierarchal structure. 
    Meaning that the original base or super class for everything is the Object class, all objects 
    derive from this class. This allows us to utilize the Object.create() method. to create or 
    instansiate objects of our classes. 
 * 
 */

class Animal {
    /* ...class code here...*/
}

var myDog = Object.create(Animal)

console.log(Animal) // Outputs: [class Animal]

/*
    A more common method of creating objects from classes is to use the "new" keyword. When using
    a default or empty constructor method, JavaScript implicitly calls the Object superclass to 
    create the instance. 
*/

class Animal2 {/*... class code here...*/}

var myDog2 = new Animal2()

console.log(Animal2)

/*
    This concept is explored witin the next section on inheritance

    OOP Principles: Inheritance: 

    Inheritance is one of the foundations of object-oriented programming.

    In essence, it's a very simple concept. It works like this:

        1. There is a base class of a "thing". 

        2. There is one or more sub-classes of "things" that inherit the properties of the base class
          (sometimes also referred to as the "super-class")

        3. There might be some other sub-sub-classes of "things" that inherit from those classes in 
            point 2. 
    
    Note that each sub-class inherits from its super-class. In turn, a sub-class might also be a 
    super-class, if there are classes inheriting from that subclass. 

    All of this might sound a bit "computer-sciency", so here's a more practical example:

        1. There is a base class of "Animal"

        2. There is another class, a sub-class inheriting from the "Animal", and the name of this 
        class is "Bird"

        3. Next, there is another class, inheriting from the "Bird", and this class is "Eagle". 

    Thus, in the above example, I'm moduelling objects from the real world by constructing 
    relationships between Animal, Bird, and Eagle. Each of them are separate classes, meaning, 
    each of them are separate blueprints for specific object instances that can be constructed as 
    needed. 

    To setup the inheritance relationship between classes in JavaScript, I can use the "extends"
    keyword, as in the "class B extends A"

    Here's an example of an inheritance hierarchy in JavaScript
*/

class Animal3 {/*... class code here... */}
class Bird extends Animal3 {/* ...class code here... */}
class Eagle extends Bird {/*... class code here... */}

/*
    OOP Principles: Encapsulation

    In the simplest terms, encapsulation has to do with making a code implementation "hidden" from 
    other users, in the sense that they don't have to know how my code works in order to "consume"
    the code. 

    For example, when I run the following code:
*/

"abc".toUpperCase(); 

/*
    I don't really need to worry or even waste time thinking about how the "toUpperCase()" method 
    works. All I want is to use it, since I know it's available to me. Even if the underlying 
    syntax - that is, the implementation of the "toUpperCase()" method changes - as long as it 
    doesn't break my code, I don't have to worry about what it does in the background, or even how 
    it does it.

    OOP Principles: Abstraction

    Abstraction is all about writing code in a way that will make it more generalized. 

    The concepts of encapsulation and abstraction are often misunderstood because their difference 
    can feel blurry. 

    It helps to think of it in the following terms: 

        * An abstraction is about extracting the concept of what you're trying to do, rather than
         dealing with with a specific manifestation of that concept. 

        * Encapsulation is about you not having access to, or not being concerned with, how some 
         implementation works internally. 

    While both the encapsulation and abstraction are important concepts in OOP, it requires more 
    experince with programming in general to really delve into this topic. 

    For now, it's enough to be aware of their existence in OOP. 

    OOP Princinples: Polymorphism

    Polymorphism is a word derived from the Greem language meaning "multiple forms". An alternative 
    translation might be: "something that can take on many shapes". 

    So, to understand what polymorphism is about, let's consider some real-life objects. 

        * A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. When 
         would somone ring a bell on the door? Obviously, to get someone to show up at the door. 

        * Now consider a bell on a bicylce. A bicylce has a bell. It could be said that the bell is a property of the 
         bicycle object. This bell could be rung. However, the reason, the intention, and the result of somebody ringing 
         the bell on a bicylce is not the same as rining the bell on a door. 

    The above concepts can be coded in JavaScript as follows:
*/

const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}

const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}



/*
    I can also access the "bell()" method on the "door" object, using this syntax:
*/
door.bell(); // "Come here, please"

/*
    At this point, one can conclude that the exact same name of the method can have the exact opposite intent, based on 
    what object it is used for. 

    Now, to make this code truly polymorphic, I will add another function declaration:
*/