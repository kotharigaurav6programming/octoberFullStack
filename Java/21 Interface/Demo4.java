// example showing the concept of @FunctionalInterface annotation
@FunctionalInterface
interface Showable{
        void show();
}
class Demo4 implements Showable{
    @Override
    public void show(){
        System.out.println("show method called");
    }
    public static void main(String args[]){
        Showable obj = new Demo4();
        obj.show();
    }
}