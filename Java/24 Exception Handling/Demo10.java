// program showing the concept of exception handling

class Demo10{
    void myFun(){
        try{
            int arr[] = {1,2,3,4,5};
            System.out.println("arr[2] : "+arr[20]);
        }catch(ArrayIndexOutOfBoundsException obj){
            System.out.println(obj.getMessage());
        } 
    }
    public static void main(String args[]){
        Demo10 obj = new Demo10();
        obj.myFun();
    }
}