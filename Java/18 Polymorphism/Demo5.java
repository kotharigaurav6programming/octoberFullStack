// program showing the concept of method overloading
// compile time polymorphism

class Demo5{
    public static void main(int num){
        System.out.println("Number : "+num);
    }
    public static void main(String name){
        System.out.println("Name : "+name);
    }
    public static void main(String args[]){
        main(101);
        main("Andrew Anderson");     
        System.out.println("Number inside main : "+args[0]);
    }
}