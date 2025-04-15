// example showing the concept of file handling in java

import java.io.*;
class Demo7{
    public static void main(String args[]){
        File fobj = new File("D://desktop//CodingThinker//October Full Stack Batch//Java//26 File Handling//MyFolder//newFile.txt");
           
        try(FileOutputStream fout = new FileOutputStream(fobj);
        DataOutputStream dout = new DataOutputStream(fout);){
            dout.writeInt(12345);
            dout.writeDouble(123.45);
            dout.writeBoolean(true);
            dout.writeUTF("This is an example");
            System.out.println("Data inserted successfully");
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }
}