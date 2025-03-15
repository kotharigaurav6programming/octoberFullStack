// example showing the concept of interface
interface Showable{
        void show();
}
interface Drawable{
        void show();
}
class Demo5 implements Showable,Drawable{
    @Override
    public void show(){
        System.out.println("show method called");
    }
    public static void main(String args[]){
        Showable obj = new Demo5();
        obj.show();
        Drawable obj1 = new Demo5();
        obj1.show();        
    }
}