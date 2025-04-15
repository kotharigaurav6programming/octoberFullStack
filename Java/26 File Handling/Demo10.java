// example showing the concept of file handling in java

import java.io.*;
class Demo10{
    public static void main(String args[]){
        File fobj1 = new File("D://desktop//CodingThinker//October Full Stack Batch//Java//26 File Handling//MyFolder//newFile1.txt");

        File fobj2 = new File("D://desktop//CodingThinker//October Full Stack Batch//Java//26 File Handling//MyFolder//newFile2.txt");
           
        try(FileInputStream fin1 = new FileInputStream(fobj1);
        FileInputStream fin2 = new FileInputStream(fobj2);
        SequenceInputStream sin = new SequenceInputStream(fin1,fin2);){
            while(true){
                int x = sin.read();
                if(x==-1)
                    break;
                System.out.print((char)x);
            }
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }
}