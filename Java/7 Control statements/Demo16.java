// example showing the concept of switch control statement

class Demo16{
    public static void main(String args[]){
        char ch = 'a';
        switch(ch){
            // case 'a' : 
            //     System.out.println("character");
            //     break;
            case 'b' : 
                System.out.println("character");
                break;
            case 97 : 
                System.out.println("Ascii value");
                break;
            default : 
                System.out.println("default case executes");
                break;
        }
    }
}