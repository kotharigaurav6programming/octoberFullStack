// example showing the concept of file handling in java

import java.io.*;
class Demo4{
    public static void main(String args[]){
        File fobj = new File("D://desktop//CodingThinker//October Full Stack Batch//Java//26 File Handling");
            File frr[] = fobj.listFiles();
            for(File f : frr){
                if(f.getName().endsWith(".java"))
                    System.out.println("File name : "+f.getName()+" Path name : "+f.getPath());
            }
    }
}