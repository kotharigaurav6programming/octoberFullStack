// example showing the concept of super keyword

/*
    Super keyword :  It deals with parent class
        |-- variable
        |-- method
        |-- constructor 

 */
class Parent{
    Parent(){
        System.out.println("parernt class constructor called");
    }
}
class Child extends Parent{
    Child(){
        super();
        System.out.println("child class constructor called");
    }
    public static void main(String args[]){
        Child cobj = new Child();
    }
}