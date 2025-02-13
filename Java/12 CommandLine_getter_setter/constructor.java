Constructor
-----------
1. Constructor is a special member function.
2. Name of constructor is same as class name.
3. Constructor will be called automatically , when ever object of a class is created.
4. Constructor does not return any value not even void.
5. Initial work of constructor is to construct object by assigning default values.
6. Constructor is responsible for providing default initial values to data members.
7. Default copy constructor is absent in java.
8. Types of constructor : 
    a. Default Constructor or No-Argument Constructor 
    b. Parameterized Constructor 
    c. Copy constructor.
9. In Java, constructor chaining is possible.
10. If we set constructor of any class as a private, then in that case, we are not able to create object of that class from outside of that class.

    int rno = 0;
    String name = null;
    Demo obj = new Demo();