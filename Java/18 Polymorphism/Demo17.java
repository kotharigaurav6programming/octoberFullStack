// program showing the concept of run time polymorphism
class Parent{
    protected void display(){
        System.out.println("display method called of parent");
    }
}
class Child extends Parent{    
    @Override
    public void display(){
        System.out.println("display method called of child");
        super.display();
    }
}
class Demo17{
    public static void main(String args[]){
        Parent cobj = new Child();  // upcasting
        cobj.display();
    }
}
