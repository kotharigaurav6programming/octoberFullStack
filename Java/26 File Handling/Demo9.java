// example showing the concept of file handling in java

import java.util.Scanner;
import java.io.*;
class Demo9{
    public static void main(String args[]){
        File fobj1 = new File("D://desktop//CodingThinker//October Full Stack Batch//Java//26 File Handling//MyFolder//newFile1.txt");

        File fobj2 = new File("D://desktop//CodingThinker//October Full Stack Batch//Java//26 File Handling//MyFolder//newFile2.txt");
           
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter content : ");
        String str = sc.nextLine();

        try(FileOutputStream fout1 = new FileOutputStream(fobj1);
        FileOutputStream fout2 = new FileOutputStream(fobj2);
        ByteArrayOutputStream bout = new ByteArrayOutputStream();){

            byte bt[] = str.getBytes();
            bout.write(bt);
            bout.writeTo(fout1);
            bout.writeTo(fout2);
            System.out.println("Data inserted successfully");
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }
}