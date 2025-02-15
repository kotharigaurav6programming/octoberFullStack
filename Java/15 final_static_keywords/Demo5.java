// program showing the concept of final keyword
// generates error
class Demo5{
    public static void main(String args[]){
        final int arr[] = {1,2,3,4,5};
        int arr1[] = {11,22,33,44,55};
        arr = arr1;
        for(int a : arr){
            System.out.print(a+"\t");
        }
    }
}