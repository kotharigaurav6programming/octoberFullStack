// program showing the concept of final keyword
class Demo3{
    public static void main(String args[]){
        int arr[] = {1,2,3,4,5};
        for(final int a : arr){
            System.out.print(a+"\t");
        }
    }
}