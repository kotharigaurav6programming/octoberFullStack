// program showing the concept of static block

class Demo{
    static{
        System.out.println("statement Demo");
    }
}
class Demo10{
    static{
        System.out.println("statement Demo10");
    }
    public static void main(String args[]){
        Demo obj1 = new Demo();
        Demo obj2 = new Demo();
        Demo obj3 = new Demo();
        
        System.out.println("statement inside main method");
    }
}