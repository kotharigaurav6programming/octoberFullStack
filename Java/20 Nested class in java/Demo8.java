// Nested class in java (non-static nested class | inner class | member class)
// Enclosing class
class EnclosingClass{
    public int a = 100;
    static protected int b = 200;
    private String name= "Andrew Anderson";
    void show(){
        NestedClass obj = new NestedClass();
        obj.display();
    }
    // non-static nested class | inner class | member class
    class NestedClass{
        void display(){
            System.out.println("Name : "+name);
            System.out.println("value of a : "+a);
            System.out.println("Value of b : "+b);
        }
    } 
}
class Demo8{        
    public static void main(String args[]){
        EnclosingClass obj = new EnclosingClass();
        obj.show();
    }
}
