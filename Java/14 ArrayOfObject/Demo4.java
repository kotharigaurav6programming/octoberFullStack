// program showing the concept of array of object

import java.util.Scanner;
class Product{
    int id;
    String name;
    double price;
    void getData(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Name : ");
        name = sc.nextLine();
        
        System.out.println("Enter Id : ");
        id = sc.nextInt();
        
        System.out.println("Enter Price : ");
        price = sc.nextDouble();
    }
    void display(){
        System.out.println("Product Id : "+id);
        System.out.println("Product Name : "+name);
        System.out.println("Product Price : "+price);
    }
}
class Demo4{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter no. of products : ");
        int num = sc.nextInt();

        Product pobj[] = new Product[num];
        // System.out.println("pobj[0] : "+pobj[0]);
        // System.out.println("pobj[1] : "+pobj[1]);
        
        for(int i=0;i<pobj.length;i++){
            pobj[i] = new Product();
            pobj[i].getData();
        }
        for(Product obj : pobj){
            obj.display();
            System.out.println();
        }
    } 
}