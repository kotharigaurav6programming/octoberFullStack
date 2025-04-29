
public class Demo12 
{
    public static void main(String[] args) {
        String str = "Hello User";
        byte bt[] = str.getBytes();
        for(byte b : bt){
            System.out.print((char)b+" ");
        }
        
        System.out.println();
        String s1 = "Hello";
        String s2 = "Welcome";
        s1.concat(s2);
        System.out.println(""+s1);
        System.out.println(""+s1.concat(s2));
        System.out.println(""+str.substring(2, 7));
    }
}
