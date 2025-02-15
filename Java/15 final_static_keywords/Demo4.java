// program showing the concept of final keyword
class Demo4{
    public static void main(String args[]){
        final int arr[] = {1,2,3,4,5};
        arr[2] = 200;
        for(int a : arr){
            System.out.print(a+"\t");
        }
    }
}