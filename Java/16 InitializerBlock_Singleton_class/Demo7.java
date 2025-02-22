// program showing the concept of initializer block
class Parent{
    Parent(){
        System.out.println("Parent class constructor called");
    }
}
class Demo7 extends Parent{
        // static block
        static{
            System.out.println("static block executes");
        }
        // initializer block
        {
            System.out.println("initializer block");
        }
        // constructor
        Demo7(){
            super();
            // here initialize block executes    
            System.out.println("constructor");
        }
    public static void main(String args[]){
        Demo7 obj = new Demo7();
    }
}