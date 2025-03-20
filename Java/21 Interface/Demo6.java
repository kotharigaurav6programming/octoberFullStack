// example showing the concept of interface
interface Showable{
        void show();
}
interface Drawable extends Showable{
        void show();
}
class Demo6 implements Drawable{
    @Override
    public void show(){
        System.out.println("show method called");
    }
    public static void main(String args[]){
        Drawable obj = new Demo6();
        obj.show();        
    }
}