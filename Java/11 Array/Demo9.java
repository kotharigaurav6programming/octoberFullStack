// example showing the concept of 1d array 
import java.util.Scanner;
class Demo9{
    int[] getArray(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of array :");
        int size = sc.nextInt();

        int arr[] = new int[size];
        System.out.println("Enter array elements : ");
        for(int i=0;i<size;i++){
            arr[i] = sc.nextInt();
        }
        return arr;
    }
    public static void main(String args[]){
        Demo9 obj = new Demo9();
        int arr2[] = obj.getArray();
        for(int element : arr2) {
            System.out.print(element+"\t");
        }       
    }
}