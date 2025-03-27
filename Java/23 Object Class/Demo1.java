Object class in java
--------------------
Object class is the parent class of every class in java, every class whether directly or indirectly extends Object class.

class Hello extends Object{
    ....
}
Here hello class directly extends Object class 

class Parent extends Object{
    ....
}
class Child extends Parent{
    .....
}
Here Parent class directly extends Object class 
and Child class indirectly extends Object class

There are some methods of Object class : 
---------------------------------------
1. toString()
2. hashCode()
3. equals()
4. getClass()
5. finalize()
6. clone()
7. wait()
    |-- wait(argument1)
    |-- wait(argument1,argument2)
8. notify()
9. notifyAll()
---------------------------------

1. toString()
   public String toString(){
     return getClass().getName()+"@"+Integer.toHexString(hashCode());
   } 

Demo obj = new Demo();
sop(obj);

output : Demo@34a3b4