// example showing the concept of selection sort 
import java.util.Scanner;
class Demo11{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of array :");
        int size = sc.nextInt();

        int arr[] = new int[size];
        System.out.println("Enter array elements : ");
        for(int i=0;i<size;i++){
            arr[i] = sc.nextInt();
        }
        System.out.println("Array elements are : ");
        for(int i=0;i<size;i++){
            System.out.print(arr[i]+"\t");
        }
        System.out.println("\nEnter element to be search : ");
        int search = sc.nextInt();
        int i;
        for(i=0;i<size;i++){
            if(arr[i]==search)
                break;
        }
        if(i==size)
            System.out.println("Element not found");
        else    
            System.out.println("Element found");
    }
}