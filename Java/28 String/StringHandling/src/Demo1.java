public class Demo1 
{
    public static void main(String[] args) {
        // by string literal
        String s1 = "Andrew Anderson";
        System.out.println("String : "+s1);
        
        // by new keyword
        String s2 = new String("Mathew Math");
        System.out.println("String : "+s2);
        
        char ch[] = {'a','b','c','d','e'};
        String s3 = new String(ch);
        System.out.println("String : "+s3);
        
        byte bt[] = {65,66,67,68,69};
        String s4 = new String(bt);
        System.out.println("String : "+s4);
    }
}
