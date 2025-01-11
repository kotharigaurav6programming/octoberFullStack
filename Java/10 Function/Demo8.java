// program showing the concept of No Argument and With return type

import java.util.Scanner;
class Demo8{
    int addition(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first number : ");
        int num1 = sc.nextInt();
        System.out.println("Enter second number : ");
        int num2 = sc.nextInt();
        return num1+num2; // with return type 
    }
    public static void main(String args[]){
        Demo8 obj = new Demo8();
  
        int result = obj.addition(); // no argument
        System.out.println("Result : "+result);

//        System.out.println("Result : "+obj.addition());

    }
}
