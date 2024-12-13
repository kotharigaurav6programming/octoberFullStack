// example showing the concept of switch control statement

/*
    syntax:

        switch(constant | variable | expression){
            case 1 : ........
                     break;
            case 'A' : ........
                     break;
            case 'a' : ........
                     break;
            case '#' : ........
                     break;
            case "red" : ........
                     break;
            default : ........
                     break;    
        }
*/

class Demo15{
    public static void main(String args[]){
        switch(10){
            case 0 : 
                System.out.println("case 0 executes");
            default : 
                System.out.println("default case executes");
            case 1 : 
                System.out.println("case 1 executes");
        }
    }
}