// example showing the concept of interface
interface Drawable{
    default void show(){
        printData();
        System.out.println("show method called");
    }
    static void display(){
        printData();
        System.out.println("display method called");
    }
    private static void printData(){
        System.out.println("\nstatement 1");
        System.out.println("statement 2");
        System.out.println("statement 3");
    }
    default void print(){
        show();
        display();
    }
}
class Demo15 implements Drawable
{
    public static void main(String args[]){
        Drawable obj = new Demo15();
        obj.print();        
    }
}