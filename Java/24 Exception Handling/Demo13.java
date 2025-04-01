// program showing the concept of exception handling
class Demo13{
    public static void main(String args[]){
        try{
            Class.forName("Demo12");
            System.out.println("Class Found");
        }catch(ClassNotFoundException e){
            System.out.println("Exception : "+e);
        }
    }
}