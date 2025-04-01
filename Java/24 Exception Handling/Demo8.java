// program showing the concept of exception handling

class Demo8{
    static String name;
    public static void main(String args[]){
       try{
            System.out.println("Length : "+name.length());
       }catch(NullPointerException e){
            System.out.println("Exception : "+e);
       }
    }
}