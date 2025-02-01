// example showing the concept of multidimensional array
class Demo21{
    public static void main(String args[]){
        int arr[][][] = new int[2][3][3];
        int count=0;
        // initialize array by values
        // no. of 2d matrix
        for(int i=0;i<2;i++){
            // represents rows
            for(int j=0;j<3;j++){
                // represents columns
                    for(int k=0;k<3;k++){
                        arr[i][j][k] = ++count;
                    }
            }
        }

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

/*
    0   1   2   3   4     indexing 1d array

    00  01  02
    10  11  12
    20  21  22     indexing 2d array

    multidimensional array indexing

    ijk
    000 001 002
    010 011 012     
    020 021 022  

    ijk
    100 101 102
    110 111 112     
    120 121 122  

    */