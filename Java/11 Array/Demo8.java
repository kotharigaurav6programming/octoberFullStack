// example showing the concept of 1d array 
class Demo8{
    public static void main(String args[]){
        int arr1[] = {1,2,3,4,5};
        int arr2[] = arr1;
        for(int element : arr2) {
            System.out.print(element+"\t");
        }       
    }
}