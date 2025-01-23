// example showing the concept of adding corner elements of a 2d array
import java.util.Scanner;
class Demo14{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter rows and columns :");
        int r = sc.nextInt();
        int c = sc.nextInt();

        // declaration of 2d array
        int arr[][] = new int[r][c];

        // taking values from user
        System.out.println("Enter array elements : ");
        for(int i=0;i<r;i++){
            for(int j=0;j<c;j++){
                arr[i][j]=sc.nextInt();
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
        System.out.println("Sum : "+(arr[0][0]+arr[r-1][0]+arr[0][c-1]+arr[r-1][c-1]));
    }
}