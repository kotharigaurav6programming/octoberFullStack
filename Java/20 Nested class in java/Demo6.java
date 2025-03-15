// Nested class in java (non-static nested class | inner class)
// Enclosing class
class Demo6{        
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
    public static void main(String args[]){
        // Demo6 obj = new Demo6();
        // NestedClass nobj = obj.new NestedClass();

        NestedClass nobj = new Demo6().new NestedClass();
        nobj.display();
    }
}
