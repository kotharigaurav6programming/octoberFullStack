// program showing the concept of method overloading
// compile time polymorphism

class Demo6{
    final void demo(int num){
        System.out.println("Number : "+num);
    }
    final void demo(String name){
        System.out.println("Name : "+name);
    }
    public static void main(String args[]){
        Demo6 obj = new Demo6();
        obj.demo(101);
        obj.demo("Andrew Anderson");
    }
}