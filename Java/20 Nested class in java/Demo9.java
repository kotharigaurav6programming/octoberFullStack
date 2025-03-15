// Nested class in java (non-static nested class | inner class | Local class)
// Enclosing class
class EnclosingClass{
    public int a = 100;
    static protected int b = 200;
    private String name= "Andrew Anderson";
    // non-static nested class | inner class | local class
    void show(){
        class NestedClass{
            void display(){
                System.out.println("Name : "+name);
                System.out.println("value of a : "+a);
                System.out.println("Value of b : "+b);
            }
        }
        NestedClass obj = new NestedClass();
        obj.display();
    } 
}
class Demo9{        
    public static void main(String args[]){
        EnclosingClass obj = new EnclosingClass();
        obj.show();
    }
}
