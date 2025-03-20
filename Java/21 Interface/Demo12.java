// example showing the concept of interface
interface Drawable{
    int age = 100;
    void showAge();
}
class GetAge implements Drawable{
    @Override
    public void showAge(){
        System.out.println("Age : "+age);
    }
}
class Demo12{
    public static void main(String args[]){
        Drawable obj = new GetAge();
        obj.showAge();
    }
}