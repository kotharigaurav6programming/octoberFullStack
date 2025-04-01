// program showing the concept of exception handling
@Deprecated
class Demo12{
    public static void main(String args[]){
        try{
            Object obj = new Integer(100);
            String str = (String)obj;
            System.out.println("Result : "+str);
        }catch(ClassCastException e){
            System.out.println("Exception : "+e);
        }        
    }
}