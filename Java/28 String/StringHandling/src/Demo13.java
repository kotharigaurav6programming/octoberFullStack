
public class Demo13 
{
    public static void main(String[] args) {
//      StringBuffer sb = new StringBuffer("Hello ");
      StringBuilder sb = new StringBuilder("Hello ");
     
      sb.append("Welcome");
        System.out.println(""+sb);
        
      sb.insert(6, "Andrew ");
        System.out.println(""+sb);
                
      sb.delete(6, 13);
        System.out.println(""+sb);
        
      sb.replace(6, 14, "Peter Parker");
        System.out.println(""+sb);
              
      sb.reverse();
        System.out.println(""+sb);
    }
}
