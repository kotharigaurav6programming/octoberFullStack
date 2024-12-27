// Program showing the concept of for each loop

class Demo21{
    public static void main(String args[]){
        int arr[] = {1,2,3,4,5,6,7,8,9};
        System.out.println("Array elements are : ");
        for(int element : arr){
            System.out.print(element+"\t");
        }
    }
}

/*
    for each syntax : 

    for(<datatype> <var> : array | collection){

    }
*/