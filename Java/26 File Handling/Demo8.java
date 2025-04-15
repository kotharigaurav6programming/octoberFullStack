// example showing the concept of file handling in java

import java.io.*;
class Demo8{
    public static void main(String args[]){
        File fobj = new File("D://desktop//CodingThinker//October Full Stack Batch//Java//26 File Handling//MyFolder//newFile.txt");
           
        try(FileInputStream fin = new FileInputStream(fobj);
        DataInputStream din = new DataInputStream(fin);){
            System.out.println(din.readInt());
            System.out.println(din.readDouble());
            System.out.println(din.readBoolean());
            System.out.println(din.readUTF());
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }
}