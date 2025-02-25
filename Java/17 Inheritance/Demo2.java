// example showing the concept of super keyword

/*
    Super keyword :  It deals with parent class
        |-- variable
        |-- method
        |-- constructor 

 */
class Parent{
    static String name = "Andrew Anderson";
    void show(){
        System.out.println("show of parernt called");
    }
}
class Child extends Parent{
    static String name = "Peter Parker";
    void show(){
        System.out.println("show of child called");
    }
    void display(){
        System.out.println("Parent name : "+super.name);
        System.out.println("Child name : "+name);
        super.show();
        show();
    }
    public static void main(String args[]){
        Child cobj = new Child();
        cobj.display();
    }
}