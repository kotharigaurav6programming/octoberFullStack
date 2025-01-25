// example showing the concept of Jagged array

class Demo16{
    public static void main(String args[]){
        int arr[][]=new int[5][];
        // System.out.println("length : "+arr.length);
        arr[0] = new int[]{4,5};
        arr[1] = new int[]{4,5,4,5};
        arr[2] = new int[]{4,5,7,8,9,0};
        arr[3] = new int[]{4,5,6,5};
        arr[4] = new int[]{4,5,3,2,1,2,3,4,5};

        System.out.println("Array elements are : ");
        // for(int i=0;i<5;i++){
        //     for(int j=0;j<arr[i].length;j++){
        //         System.out.print(arr[i][j]+"\t");
        //     }
        //     System.out.println();
        // }

        for(int ar[] : arr){
            for(int element : ar){
                System.out.print(element+"\t");
            }
            System.out.println();
        }
    }
}