// example showing the concept of mysql

var readLine = require("readline");
var mysql = require("mysql2");

const instance = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
});

const con = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"root",
    database:"evedb"
});

con.connect((error)=>{
    if(error)
        console.log("Error : "+error);
    else{
        console.log("Connection established successfully");
        showMenu();
    }
});

function showMenu(){
    instance.question("\nSelect Any One Operation : \n1. Add Student\n2. Update Student\n3. Delete Student\n4. View All Students\n5. View Specific Student By Id\n\nSelect Choice : ",(option)=>{
        switch(option){
            case '1' : addStudent();
                        break;
            case '2' : updateStudent();
                        break;
            case '3' : deleteStudent();
                        break;
            case '4' : viewStudents();
                        break;
            case '5' : viewSpecificStudent();
                        break;
            default : console.log("Thanks For Visit");
                        con.close();
                        instance.close(); 
                        break;
        }
    });
}

function addStudent(){
    instance.question("Enter Student name : ",(sname)=>{
       instance.question("Enter Student Email : ",(email)=>{
         instance.question("Enter Student Address : ",(address)=>{
           instance.question("Enter Student Percentage : ",(per)=>{
                var query = 'insert into student(sname,email,address,per) values(?,?,?,?)';
                var values = [sname,email,address,per];
                con.query(query,values,(error,result)=>{
                    if(error)
                        console.log("Error : ",error);
                    else{
                        console.log("\n######   Data inserted successfully  ######");
                        showMenu();
                    }
                });
           });
        }); 
       }); 
    });
}
function updateStudent(){
    instance.question("Enter student id : ",(sid)=>{
        var query = 'select * from student where sid = ?';
        var value = [sid];
        con.query(query,value,(error,result)=>{
            if(error)
                console.log("Error : ",error);
            else{
                // console.log(result);
                if(result.length!=0){
                    instance.question("Enter updated name : ",(sname)=>{
                        instance.question("Enter updated email : ",(email)=>{
                            instance.question("Enter updated address : ",(address)=>{
                                instance.question("Enter updated percent : ",(per)=>{
                                    var query = 'update student set sname=?,email=?,address=?,per=? where sid=?';
                                    var values = [sname,email,address,per,sid];
                                    con.query(query,values,(error,result)=>{
                                        if(error)
                                            console.log("Error inside update : ",error);
                                        else
                                            console.log("Data Updated Successfully");
                                            showMenu();
                                    });
                                });
                            });
                        });
                    });
                }else{
                    console.log("\n####### Record Not Found ########");
                    showMenu();
                }
            }
        });
    });
}
function deleteStudent(){
    instance.question("Enter Student Id : ",(sid)=>{
        var query = 'select * from student where sid = ?';
        var value = [sid];
        con.query(query,value,(error,result)=>{
            if(error)
                console.log("Error : ",error);
            else{
                if(result.length!=0){
                    var query = 'delete from student where sid = ?';
                    con.query(query,value,(error,result)=>{
                        if(error)
                            console.log("Error while delete data : ",error);
                        else{
                            console.log("Data deleted successfully");
                            showMenu();
                        }
                    });            
                }else{
                    console.log("\n##### Record Not Found #####");
                    showMenu();
                }
            }
        });
    });
}
function viewStudents(){
    var query = 'select * from student';
    con.query(query,(error,result)=>{
        if(error)
            console.log("Error : ",error);
        else
            console.table(result);
        showMenu();
    });
}
function viewSpecificStudent(){
    console.log("specific");
}