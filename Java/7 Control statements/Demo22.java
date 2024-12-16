// program showing the ocnept of switch control statement

import java.util.Scanner;
class Demo22{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter values of a and b : ");
        int a = sc.nextInt();
        int b = sc.nextInt();

        System.out.println("Select any Option : ");
        System.out.println("1 for Add");
        System.out.println("2 for Sub");
        System.out.println("3 for Exit");
        
        System.out.println("Enter Choice : ");
        int choice = sc.nextInt();

        switch(choice){
            case 1 : System.out.println("Add : "+(a+b));
                        break;
            case 2 : System.out.println("Sub : "+(a-b));
                        break;
            case 3 : System.out.println("User don't want to continue");
                        break;
            default : System.out.println("Invalid selection");
                        break;
        }   
    }
}