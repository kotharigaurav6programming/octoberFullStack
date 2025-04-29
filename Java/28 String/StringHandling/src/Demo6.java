public class Demo6 
{
    public static void main(String[] args) {
        String s1 = "Hello";
        String s2 = "Hello";
        String s3 = "Welcome";
        
        String s4 = new String("Hello");
        String s5 = new String("Hello");
        String s6 = new String("Welcome");
        
        System.out.println("s1==s2 : "+(s1==s2));
        System.out.println("s1==s3 : "+(s1==s3));
        System.out.println("s1==s4 : "+(s1==s4));
        System.out.println("s4==s5 : "+(s4==s5));
        System.out.println("s4==s6 : "+(s4==s6));
                
    }
}
