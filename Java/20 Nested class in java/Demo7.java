// Nested class in java (non-static nested class | inner class)
// Enclosing class
class EnclosingClass{
    public int a = 100;
    static protected int b = 200;
    private String name= "Andrew Anderson";
    // non-static nested class | inner class
    class NestedClass{
        void display(){
            System.out.println("Name : "+name);
            System.out.println("value of a : "+a);
            System.out.println("Value of b : "+b);
        }
    } 
}
class Demo7{        
    public static void main(String args[]){
        EnclosingClass.NestedClass nobj = new EnclosingClass().new NestedClass();
        nobj.display();
    }
}
