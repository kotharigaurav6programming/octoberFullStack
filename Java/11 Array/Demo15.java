// example showing the concept of adding diagonal elements of a 2d array
import java.util.Scanner;
class Demo15{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter rows and columns :");
        int r = sc.nextInt();
        int c = sc.nextInt();
        if(r==c){
            // declaration of 2d array
            int arr[][] = new int[r][c];
            int sum=0;
            // taking values from user
            System.out.println("Enter array elements : ");
            for(int i=0;i<r;i++){
                for(int j=0;j<c;j++){
                    arr[i][j]=sc.nextInt();
                    if(i==j)
                        sum+=arr[i][j];
                }
            }

            // printing array values
            System.out.println("Array elements are: ");
            for(int ar[] :  arr)
            {
                for(int element : ar){
                    System.out.print("\t"+element);
                }
                System.out.println();
            }
            System.out.println("Sum : "+sum);
        }else
            System.out.println("Sum not possible");
    }
}