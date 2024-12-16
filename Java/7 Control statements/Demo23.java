// program showing the ocnept of switch control statement

import java.util.Scanner;
class Demo23{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter values of a and b : ");
        int a = sc.nextInt();
        int b = sc.nextInt();

        System.out.println("Select any Option : ");
        System.out.println("+ for Add");
        System.out.println("- for Sub");
        System.out.println("e for Exit");
        
        System.out.println("Enter Choice : ");
        char choice = sc.next().charAt(0);

        switch(choice){
            case '+' : System.out.println("Add : "+(a+b));
                        break;
            case '-' : System.out.println("Sub : "+(a-b));
                        break;
            case 'e' : System.out.println("User don't want to continue");
                        break;
            default : System.out.println("Invalid selection");
                        break;
        }   
    }
}