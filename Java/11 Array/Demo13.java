// example showing the concept of 2d array
import java.util.Scanner;
class Demo13{
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
        /*
        System.out.println("Array elements are: ");
        for(int i=0;i<r;i++){
            for(int j=0;j<c;j++){
                System.out.print("\t"+arr[i][j]);
            }
            System.out.println();
        }
        */
        System.out.println("Array elements are: ");
        for(int ar[] :  arr)
        {
            for(int element : ar){
                System.out.print("\t"+element);
            }
            System.out.println();
        }
    }
}