/*
    *
    **
    ***
    ****
    *****
    ****
    ***
    **
    *
*/

import java.util.Scanner;
class Demo16{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter rows : ");
        int rows = sc.nextInt();
        for(int i=1;i<=rows/2+1;i++){
            for(int j=1;j<=i;j++){
               System.out.print("*");
            }
            System.out.println();
        } 
        for(int i=rows/2;i>=1;i--){
            for(int j=1;j<=i;j++){
               System.out.print("*");
            }
            System.out.println();
        } 
 
    }
}