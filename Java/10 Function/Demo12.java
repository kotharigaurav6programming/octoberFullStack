import java.util.Scanner;
class Demo12{
    // instance variable
    int a,b;
    // instance method
    void setData(int a1,int b1){
        a = a1;
        b = b1;
    }
    void add(){
        System.out.println("Add : "+(a+b));
    }
    void sub(){
        System.out.println("Sub : "+(a-b));
    }
    void mul(){
        System.out.println("Mul : "+(a*b));
    }
    void div(){
        System.out.println("Div : "+(a/b));
    }
    void mod(){
        System.out.println("Mod : "+(a%b));
    }

    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first number : ");
        int a1 = sc.nextInt();
        System.out.println("Enter second number : ");
        int b1 = sc.nextInt();
        
        Demo12 obj = new Demo12();
        obj.a = a1;
        obj.b = b1;

//        obj.setData(a,b);
        obj.add();
        obj.sub();
        obj.mul();
        obj.div();
        obj.mod();
    }
}
