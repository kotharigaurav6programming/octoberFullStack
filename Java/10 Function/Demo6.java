// program showing the concept of No Argument and No return type

import java.util.Scanner;
class Demo6{
    // instance | object method | member function
    void addition(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first number : ");
        int num1 = sc.nextInt();
        System.out.println("Enter second number : ");
        int num2 = sc.nextInt();
        System.out.println("Addition : "+(num1+num2));
        // no return type because return statement is missing
    }
    public static void main(String args[]){
        Demo6 obj = new Demo6();
        System.out.println("Execution starts");
        obj.addition(); // no argument
        System.out.println("Execution ends");
    }
}
