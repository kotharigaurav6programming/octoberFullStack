
import java.util.StringJoiner;

public class Demo10 
{
    public static void main(String[] args) {
        StringJoiner sj = new StringJoiner("-");
        sj.add("Indore");
        sj.add("Ujjain");
        sj.add("Jabalpur");
        System.out.println(sj);
        
        String str = String.join("/", "29","04","2025");
        System.out.println(str);
    }
}
