// example showing the concept of interface
interface Drawable{
        void display();
        interface Showable extends Drawable{
            void show();
        }
}
class Demo9 implements Drawable, Drawable.Showable{
    @Override
    public void show(){
        System.out.println("show method called");
    }
    @Override
    public void display(){
        System.out.println("display method called");
    }
    public static void main(String args[]){
        Drawable.Showable obj1 = new Demo9();
        obj1.show(); 
        obj1.display();       
    }
}