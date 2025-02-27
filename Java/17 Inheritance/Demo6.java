// program showing the concept of inheritance (Multilevel Inheritance)
import java.util.Scanner;
// grand parent class
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
//parent class
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
// child class
class Density extends Volume{
    double m;
    Density(int l,int b,int h,double m){
        super(l,b,h);
        this.m=m;
    }
    double getDensity(){
        return m/getVolume();
    }
}
class Demo6{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter l,b,h and m : ");
        int l = sc.nextInt();
        int b = sc.nextInt();
        int h = sc.nextInt();
        double m = sc.nextDouble();
        
        Density obj = new Density(l,b,h,m);

        System.out.println("Area : "+obj.getArea());
        System.out.println("Volume : "+obj.getVolume());
        System.out.println("Density : "+obj.getDensity());
        
    }
}