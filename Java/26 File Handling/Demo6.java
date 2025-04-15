// example showing the concept of file handling in java

import java.io.*;
class Demo6{
    public static void main(String args[]){
        File fobj = new File("D://desktop//CodingThinker//October Full Stack Batch//Java//26 File Handling//MyFolder//newFile.txt");
           
        try(FileInputStream fin = new FileInputStream(fobj)){
            while(true){
                int x = fin.read();
                if(x==-1)
                    break;
                System.out.print((char)x);
            }
        }catch(IOException e){
            System.out.println("Exception : "+e);
        }
    }
}