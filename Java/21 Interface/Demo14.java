// example showing the concept of interface
interface Drawable{
    default void show(){
        System.out.println("statement 1");
        System.out.println("statement 2");
        System.out.println("statement 3");
        System.out.println("show method called");
    }
    static void display(){
        System.out.println("\nstatement 1");
        System.out.println("statement 2");
        System.out.println("statement 3");
        System.out.println("display method called");
    }
}
class Demo14 implements Drawable
{
    public static void main(String args[]){
        Drawable obj = new Demo14();
        obj.show();
        Drawable.display();        
    }
}