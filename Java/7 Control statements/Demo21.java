// example showing the concept of switch control statement

import java.util.Scanner;
class Demo21{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter color : ");

        switch(sc.next().toLowerCase()){
            case "red":
                    System.out.println("Red color");
                    System.out.println("Enter Red color shade : ");
                    switch(sc.next().toLowerCase()){
                        case "lightred" :
                                System.out.println("Light Red");
                                break; 
                        case "darkred" :
                                System.out.println("Dark Red");
                                break;
                        default : 
                                System.out.println("Invalid Red Shade");
                                break; 
                    }
                    break;
            case "green":
                    System.out.println("Green color");
                    break;
            default:
                    System.out.println("Invalid color");
                    break;
        }
    }
}

