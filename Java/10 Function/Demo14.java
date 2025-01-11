//  this keyword is used to represent current class member function
import java.util.Scanner;
class Demo14{
    // instance variable | data members
    int a,b;
    // instance method | member function
    void setData(int a,int b){
        this.a = a;
        this.b = b;
        this.add();
        sub(); // this.sub();
        this.mul();
        div(); // this.div();
        this.mod();
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
        int a = sc.nextInt();
        System.out.println("Enter second number : ");
        int b = sc.nextInt();
        
        Demo14 obj = new Demo14();
        obj.setData(a,b);
    }
}
