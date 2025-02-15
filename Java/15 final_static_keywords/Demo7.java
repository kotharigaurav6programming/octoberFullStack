// program showing the concept of final keyword
// final method cannot be overridden
class Demo{
    final void display(){
        System.out.println("display method called of Demo");
    }
}
class Demo7 extends Demo{
    void display(){
        System.out.println("display method called of Demo7");
    }
    public static void main(String args[]){
        Demo7 obj = new Demo7();
        obj.display();
    }
}
