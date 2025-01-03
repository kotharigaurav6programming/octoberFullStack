/*
    * * * * *
     *     *
      *   *
       * *
        *
*/

import java.util.Scanner;
class Demo15{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter rows : ");
        int rows = sc.nextInt();
        for(int i=rows;i>=1;i--){
            // loop for space
            for(int sp=1;sp<=rows-i;sp++){
                System.out.print(" ");
            }
            for(int j=1;j<=i;j++){
                if(j==1 || i==rows || j==i)
                    System.out.print("* ");
                else
                    System.out.print("  ");
            }
            System.out.println();
        } 
    }
}