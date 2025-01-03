/*
        *
       **
      ***
     ****
    *****
*/

import java.util.Scanner;
class Demo10{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter rows : ");
        int rows = sc.nextInt();
        for(int i=1;i<=rows;i++){
            // loop for space
            for(int sp=1;sp<=rows-i;sp++){
                System.out.print(" ");
            }
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }
            System.out.println();
        } 
    }
}