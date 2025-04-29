
public class Demo11 
{
    public static void main(String[] args) {
        String s1 = "Hello";
        String s2 = "HELLO";
        System.out.println(""+s1.equals(s2));
        System.out.println(""+s1.equalsIgnoreCase(s2));
        System.out.println(""+s1.toUpperCase());
        System.out.println(""+s2.toLowerCase());
        System.out.println(""+s1.charAt(3));
        System.out.println(""+s1.endsWith("o"));
        System.out.println(""+s1.endsWith("p"));
        String s3 = "               Welcome           ";
        System.out.println(""+s3.trim());
        System.out.println(""+s3);
        System.out.println(""+s3.replace('W', 'w'));
        System.out.println(""+s3.replace('e', 'w'));
        String s4 = "Hello User";
        System.out.println(""+s4.replace("Hello", "Welcome"));
    }
}
