import java.util.StringTokenizer;
public class Demo9 
{
    public static void main(String[] args) {
        String str = "Hello user how are you ?";
        StringTokenizer st = new StringTokenizer(str, " ");
        while(st.hasMoreElements()){
            System.out.println(st.nextElement());
        }
    }
}
