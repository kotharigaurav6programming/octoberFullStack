public class Demo8 
{
    public static void main(String[] args) {
        String s1 = "hello";
        String s2 = "HELLO";
        String s3 = s1.toUpperCase().intern();
        
        System.out.println("s2==s3 : "+(s2==s3));
    }
}
