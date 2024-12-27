// Program showing the concept of do while loop

import java.util.Scanner;
class Demo20{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        char ch;
        int sum=0;
        do{
            System.out.println("Enter number : ");
            int num = sc.nextInt();
            sum = sum+num;
            System.out.println("Do you want to continue ?\nIf Yes Press y/Y : ");
            ch = sc.next().charAt(0);
        }while(ch=='y' || ch=='Y');
        System.out.println("Sum : "+sum);
    }
}