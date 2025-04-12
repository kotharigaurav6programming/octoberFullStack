// example showing the concept of file handling in java

import java.util.Scanner;
import java.io.*;
class Demo5{
    public static void main(String args[]){
        File fobj = new File("D://desktop//CodingThinker//October Full Stack Batch//Java//26 File Handling//MyFolder//newFile.txt");
           
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter content : ");
        String str = sc.nextLine();

        try(FileOutputStream fout = new FileOutputStream(fobj,true)){
            byte bt[] = str.getBytes();
            fout.write(bt);
            //fout.close();// optional
            System.out.println("Data inserted successfully");
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }
}