// example showing the concept of interface
interface Drawable{
    int age = 100;
    void showAge();
}
class Demo13{
    public static void main(String args[]){
        /*
        Drawable obj = new Drawable(){
            @Override
            public void showAge(){
                System.out.println("Age : "+age);
            }
        };
        obj.showAge();
        */
        new Drawable(){
            @Override
            public void showAge(){
                System.out.println("Age : "+age);
            }
        }.showAge();
    }
}