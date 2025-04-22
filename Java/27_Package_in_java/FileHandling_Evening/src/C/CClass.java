package C;
import A.AClass;
public class CClass {
    protected void viewData(){
        System.out.println("viewData");
        AClass obj = new AClass();
        obj.showData();
    }
}
