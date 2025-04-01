// program showing the concept of exception handling
class Demo11{
    void myFun(){
        try{
            int arr[] = {1,2,3,4,5};
            System.out.println("arr[2] : "+arr[2]);

            String str = "Hello";
            System.out.println("str.charAt(2) : "+str.charAt(20));
        }
        catch(ArrayIndexOutOfBoundsException obj){
            System.out.println(obj.getMessage());
        }
        catch(StringIndexOutOfBoundsException obj){
            System.out.println(obj.getMessage());
        }
        finally{
            System.out.println("This block executes mandatorily");
        } 
    }
    public static void main(String args[]){
        Demo11 obj = new Demo11();
        obj.myFun();
    }
}