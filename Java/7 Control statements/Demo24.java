// program showing the ocnept of switch control statement

import java.util.Scanner;
class Demo24{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        
        System.out.println("Select any Option : ");
        System.out.println("R/r for Area of Rectangle");
        System.out.println("C/c for Area of Circle");
        System.out.println("E/e for Exit");
        
        System.out.println("Enter Choice : ");
        char choice = sc.next().charAt(0);

        switch(choice){
            case 'r' : 
            case 'R' :{ 
                    System.out.println("Enter l and b : ");
                    int l = sc.nextInt();
                    int b = sc.nextInt();
                    System.out.println("Area of Rectangle : "+(l*b));
                    break;
            }
            case 'c' : 
            case 'C' : 
                    System.out.println("Enter radius : ");
                    double r = sc.nextDouble();
                    System.out.println("Area of Circle : "+(3.14*r*r));
                    break;
            case 'E' : 
            case 'e' : System.out.println("User don't want to continue");
                        break;
            default : System.out.println("Invalid selection");
                        break;
        }   
    }
}