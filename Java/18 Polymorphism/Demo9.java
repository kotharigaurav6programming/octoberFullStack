// program showing the concept of method overriding

class Parent{
    void display(int a,double b){
        System.out.println("display method called of parent");
    }
}
class Child extends Parent{    
    @Override // annotation
    void display(int a,double b){
        System.out.println("display method called of child");
        super.display(33,3.4);
    }
}
class Demo9{
    public static void main(String args[]){
        Child cobj = new Child();
        cobj.display(4,5.4);
    }
}