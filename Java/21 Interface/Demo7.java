// example showing the concept of interface
abstract class Showable{
        abstract void show();
}
interface Drawable{
        void display();
}
class Demo7 extends Showable implements Drawable{
    @Override
    public void show(){
        System.out.println("show method called");
    }
    @Override
    public void display(){
        System.out.println("display method called");
    }
    public static void main(String args[]){
        Drawable obj = new Demo7();
        obj.display();
        Showable obj1 = new Demo7();
        obj1.show();        
    }
}