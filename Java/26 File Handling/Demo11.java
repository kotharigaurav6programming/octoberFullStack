// example showing the concept of file handling in java

import java.io.*;
class Product implements Serializable{
    int pid;
    String name;
    double price;

    Product(int pid,String name,double price){
        this.pid=pid;
        this.name=name;
        this.price=price;
    }

    public String toString(){
        return pid+" "+name+" "+price;
    }
}
class Demo11{
    public static void main(String args[]){
        Product pobj = new Product(1123,"Fairness Cream",100);
        File fobj = new File("D://desktop//CodingThinker//October Full Stack Batch//Java//26 File Handling//MyFolder//newFile.txt");

        try(FileOutputStream fout = new FileOutputStream(fobj);
        ObjectOutputStream oout = new ObjectOutputStream(fout);){
            oout.writeObject(pobj);
            System.out.println("Data inserted successfully");
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }

        try(FileInputStream fin = new FileInputStream(fobj);
        ObjectInputStream oin = new ObjectInputStream(fin);){
            Product p = (Product)oin.readObject();
            System.out.println("Data : "+p);
        }catch(IOException | ClassNotFoundException e){
            System.out.println("Exception : "+e);
        }

    }
}