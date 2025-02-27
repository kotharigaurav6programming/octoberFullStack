// program showing the concept of inheritance (Single Inheritance)
import java.util.Scanner;
// parent class
class Area{
    int l,b; // instance variable
    Area(){}
    Area(int l,int b){
        this.l=l;
        this.b=b;
    }
    int getArea(){
        return l*b;
    }
}
//child class
class Volume extends Area{
    int h; // instance variable
    Volume(int l,int b,int h){
        super(l,b);
        this.h=h;
    }
    int getVolume(){
        return getArea()*h;
    }    
}
class Demo5{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter l,b and h : ");
        int l = sc.nextInt();
        int b = sc.nextInt();
        int h = sc.nextInt();
        
        Volume obj = new Volume(l,b,h);

        System.out.println("Area : "+obj.getArea());
        System.out.println("Volume : "+obj.getVolume());
 
        Area objNew = new Area();
        System.out.println("Area : "+objNew.getArea());
        
    }
}