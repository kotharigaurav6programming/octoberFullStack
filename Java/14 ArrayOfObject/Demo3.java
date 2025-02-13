// program showing the concept of array of object

class Product{
    int id;
    String name;
    double price;
    Product(int id,String name,double price){
        this.id=id;
        this.name=name;
        this.price=price;
    }
    void display(){
        System.out.println("Product Id : "+id);
        System.out.println("Product Name : "+name);
        System.out.println("Product Price : "+price);
    }
}
class Demo3{
    public static void main(String args[]){
        Product pobj[] = new Product[2];
        // System.out.println("pobj[0] : "+pobj[0]);
        // System.out.println("pobj[1] : "+pobj[1]);
        
        pobj[0] = new Product(123,"Hair Oil",1200);
        pobj[1] = new Product(345,"Fairness Cream",1700);

        // System.out.println("pobj[0] : "+pobj[0]);
        // System.out.println("pobj[1] : "+pobj[1]);
        
        for(Product obj : pobj){
            obj.display();
            System.out.println();
        }
    } 
}