// Nested class in java (static nested class)
// Enclosing class
class Demo1{        
    static public int a = 100;
    static protected int b = 200;
    static private String name= "Andrew Anderson";
    // static nested class
    static class NestedClass{
        static void display(){
            System.out.println("Name : "+name);
            System.out.println("value of a : "+a);
            System.out.println("Value of b : "+b);
        }
    } 
    public static void main(String args[]){
        NestedClass.display();
    }
}
