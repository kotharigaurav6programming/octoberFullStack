// program showing the concept of singleton class
// Eager initialization
class Singleton{
    static private final Singleton obj = new Singleton();
    private Singleton(){}
    static Singleton getInstance(){
       return obj;     
    }
    int a = 100;
    static void display(){
        System.out.println("object : "+obj);
    }
}
class Demo8{
    public static void main(String args[]){
        Singleton.display();
        // Singleton s1 = Singleton.getInstance();
        // System.out.println("value of a(s1) : "+s1.a);

        // s1.a += 100;
        // System.out.println("value of a(s1) : "+s1.a);

        // Singleton s2 = Singleton.getInstance();
        // System.out.println("value of a(s2) : "+s2.a);
    }
}

