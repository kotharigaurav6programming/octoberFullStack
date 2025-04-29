var arr = [];

function addUser(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var contact = document.getElementById("contact").value;

    var existingData = JSON.parse(localStorage.getItem("userData"));
    console.log("Existing Data : ",existingData);
    
    var userObj = {
        username,
        email,
        password,
        contact
    }

    localStorage.setItem("userData",JSON.stringify((existingData) ? [...existingData,userObj] : [...arr,userObj]));

    // if(!existingData){
    //     localStorage.setItem("userData",JSON.stringify([...arr,userObj]));
    // }else{
    //     localStorage.setItem("userData",JSON.stringify([...existingData,userObj]));    
    // }

}