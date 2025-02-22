// program showing the concept of singleton class
// Lazy initialization
class Singleton{
    static private Singleton obj;
    private Singleton(){}
    static Singleton getInstance(){
        System.out.println("\nobject before : "+obj);
        if(obj==null){
            obj = new Singleton();
            System.out.println("object inside : "+obj);
        }
        System.out.println("object after : "+obj);
        return obj;     
    }
    int a = 100;
    static void display(){
        System.out.println("object : "+obj);
    }
}
class Demo10{
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

