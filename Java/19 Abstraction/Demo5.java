// example showing the concept of abstraction | abstract class

abstract class Parent{
    abstract void show();
}
class Circle extends Parent{
    void show(){
        System.out.println("Its circle shape");
    }
}
class Square extends Parent{
    void show(){
        System.out.println("Its square shape");
    }
}
class Rectangle extends Parent{
    void show(){
        System.out.println("Its rectangle shape");
    }
}

class Demo5{
    public static void main(String args[]){
        Parent obj;
        obj = new Circle();
        obj.show();

        obj = new Rectangle();
        obj.show();

        obj = new Square();
        obj.show();

    }
}