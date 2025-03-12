// example showing the concept of method overriding

/*
            Parent
            |-- show()
                 |---- its shape  <----------- 
                 |---- its square x
                 |---- its circle x
                 |---- its rectangle x

 Square extends Parent   Circle extends Parent    Rectangle extends Parent    
  @Override              @Override                   o/p : its shape
  void show()            void show() 
    |-- its square         |-- its circle  

*/

class Parent{
    void show(){
        System.out.println("Its shape");
    }
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
class Rectangle extends Parent{}

class Demo1{
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