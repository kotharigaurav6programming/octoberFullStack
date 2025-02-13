// program showing the concept of final keyword
/*
    Final : 1. variable : to make it constant
            2. method : final method cannot be overridden
            3. class : final class cannot be extended
*/

class Demo1{
    final int a;
    Demo1(){
        a = 100;
    }
    public static void main(String args[]){
        Demo1 obj = new Demo1();
        System.out.println("Value of a : "+obj.a);
    }
}