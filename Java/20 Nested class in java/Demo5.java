// Nested class in java (static nested class)
// Enclosing class
class EnclosingClass{
    static public int a = 100;
    static protected int b = 200;
    static private String name= "Andrew Anderson";

    // static nested class
    static class NestedClass{
        void display(){
            System.out.println("Name : "+name);
            System.out.println("value of a : "+a);
            System.out.println("Value of b : "+b);
            System.out.println("inside display : ");
            show();
        }
    } 
    static void show(){
            System.out.println("Name : "+name);
            System.out.println("value of a : "+a);
            System.out.println("Value of b : "+b);
    }
}
class Demo5{    
    public static void main(String args[]){
        EnclosingClass.NestedClass obj = new EnclosingClass.NestedClass();
        obj.display();
        // EnclosingClass obj1 = new EnclosingClass();
        // obj1.show();
        EnclosingClass.show();
    }
}
