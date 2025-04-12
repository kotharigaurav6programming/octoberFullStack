// example showing the concept of file handling in java

import java.io.*;
class Demo1{
    public static void main(String args[]){
        File fobj = new File("D://desktop//CodingThinker//October Full Stack Batch//Java//26 File Handling//MyFolder");
        if(!fobj.exists()){
            fobj.mkdir();
            System.out.println("Folder created successfully");
        }else{
            System.out.println("Folder Already exist");
        }
    }
}