// example showing the concept of file handling in java

import java.io.*;
class Demo2{
    public static void main(String args[]){
        File fobj = new File("D://desktop//CodingThinker//October Full Stack Batch//Java//26 File Handling//MyFolder//myfile.txt");
        try{
            if(!fobj.exists()){
                fobj.createNewFile();
                System.out.println("File created successfully");
            }else{
                System.out.println("File Already exist");
            }
        }catch(IOException e){
            System.out.println("Exception : e");
        }
    }
}