// example showing the concept of Binary search 
import java.util.Scanner;
class Demo12{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of array :");
        int size = sc.nextInt();

        int arr[] = new int[size];
        System.out.println("Enter array elements in ascending order: ");
        for(int i=0;i<size;i++){
            arr[i] = sc.nextInt();
        }
        System.out.println("Array elements are : ");
        for(int i=0;i<size;i++){
            System.out.print(arr[i]+"\t");
        }
        System.out.println("\nEnter element to be search : ");
        int search = sc.nextInt();
        int first = 0;
        int last = size-1;
        int middle = (first+last)/2;

        while(first<=last){
            if(arr[middle]<search)
                first = middle+1;
            else if(arr[middle]==search){
                System.out.println("Element found at position "+(middle+1));
                break;
            }
            else
                last  = middle-1; 
            middle = (first+last)/2;
        }
        if(first>last)
            System.out.println("Element not found");
    }
}