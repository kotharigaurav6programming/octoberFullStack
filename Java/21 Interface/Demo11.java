// example showing the concept of interface
interface Drawable{
    int a = 100;
}
interface Showable{
    int a = 200;
}
class Demo11{
    public static void main(String args[]){
        System.out.println("value of a : "+Drawable.a);
        System.out.println("value of a : "+Showable.a);
    }
}