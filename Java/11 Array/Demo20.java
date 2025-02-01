// example showing the concept of multidimensional array
class Demo20{
    public static void main(String args[]){
        // int arr[][] = {
        //         {1,2,3},
        //         {2,3,4},
        //         {4,5,6}
        //     }

        int arr[][][] = {
            {
                {1,2,3},
                {2,3,4},
                {4,5,6}
            },
            {
                {1,2,3},
                {2,3,4},
                {4,5,6}
            }
        };
        System.out.println("Array elements are : ");
        for( int ar[][] :  arr){
            for( int a[] :  ar){
                for(int element : a){
                    System.out.print(element+"\t");
                }
                System.out.println();
            }
            System.out.println();
        }
    }
}