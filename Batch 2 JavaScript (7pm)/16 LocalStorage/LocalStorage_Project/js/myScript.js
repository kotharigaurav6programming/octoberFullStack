var arr = [];

function addUser(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var contact = document.getElementById("contact").value;

    var existingData = JSON.parse(localStorage.getItem("userData"));
    // console.log("Existing Data : ",existingData);
    
    var userObj = {
        username,
        email,
        password,
        contact
    }

    const res = existingData?.find((obj)=>{
        return obj.email==userObj.email; 
    });
    //  console.log("--------> ",res);
    
    if(!res){
        localStorage.setItem("userData",JSON.stringify((existingData) ? [...existingData,userObj] : [...arr,userObj]));
        alert("Successfully Registered..!!");
        return true;
    }else{
        alert("EmailId Already Exist \n Please try with Another Email Id");    
        //window.location.reload();
        document.getElementById("email").value='';
        return false;
    }  
    // if(!existingData){
    //     localStorage.setItem("userData",JSON.stringify([...arr,userObj]));
    // }else{
    //     localStorage.setItem("userData",JSON.stringify([...existingData,userObj]));    
    // }
}

function checkLogin(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log("email : ",email);
    console.log("password : ",password);
    
    
    var existingData = JSON.parse(localStorage.getItem("userData"));
    const res = existingData?.find((obj)=>{
        return obj.email==email && obj.password==password; 
    });

    if(res){
        localStorage.setItem("activeEmail",email);
        return true;
    }else{
        alert("Email Id or Password is Incorrect | Please try again ..!! ");
        return false;
    }
}

function showUserData()
{
    var userData = JSON.parse(localStorage.getItem("userData"));
    var table = `<table class="table table-bordered border-primary w-75 mx-auto mt-5">
    <thead>
        <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th colspan='2'>Action</th>
        </tr>
    </thead><tbody>`;
    
    for(let i=0;i<userData.length;i++){
        table+=`<tr>
                <td>${i+1}</td>
                <td>${userData[i].username}</td>
                <td>${userData[i].email}</td>
                <td>${userData[i].contact}</td>
                <td><button class='btn btn-success' onclick='updateUser(${i})'>Update</button></td>
                <td><button class='btn btn-danger' onclick='deleteUser(${i})'>Delete</button></td>
            </tr>`;
    }
    table+=`</tbody></table>`;
    document.getElementById("showTable").innerHTML = table;   
}

// delete functionality 
function deleteUser(index){
    // alert("index : "+index);
    var existingData = JSON.parse(localStorage.getItem("userData"));
    existingData.splice(index,1);
    // console.log(existingData);
    localStorage.setItem("userData",JSON.stringify(existingData));
    window.location.reload();
}

// update functionality
function updateUser(index){
    // alert("index : "+index);
    var userObj = JSON.parse(localStorage.getItem("userData"))[index];
   
    const updateForm = `<div class="col-md-6 wow fadeInUp mx-auto" data-wow-delay="0.1s">
    <div class="bg-light p-5 h-100 d-flex align-items-center">
        <form action="viewUsers.html" onsubmit="return userUpdate('${userObj.email}')">
            <div class="row g-3">
                <h3 class="mb-4">Update Form</h3> 
                <div class="col-12">
                    <div class="form-floating">
                        <input type="text" 
                        required
                        value='${userObj.username}'
                        class="form-control" name="username" id="username" placeholder="Enter Username">
                        <label for="username">Enter Username</label>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-floating">
                        <input type="text" readonly
                        value = '${userObj.email}'
                        required class="form-control" name="email" id="email" placeholder="Enter Email">
                        <label for="email">Enter Email</label>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-floating">
                        <input type="password"
                        value='${userObj.password}'
                        required class="form-control" id="password" name="password" placeholder="Enter Password">
                        <label for="password">Enter Password</label>
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-floating">
                        <input type="text"
                        value='${userObj.contact}'
                        required class="form-control" name="contact" id="contact" placeholder="Enter 10 digit Mobile Number">
                        <label for="contact">Enter 10 digit Mobile Number</label>
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary col-5 py-2" type="submit">Update</button>
                    <button class="btn btn-primary col-5 py-2" type="reset">Reset</button>
                </div>

            </div>
        </form>
    </div>
</div>`
document.getElementById("showTable").innerHTML = updateForm;
}

function userUpdate(email){
    // alert("inside update user");
    var username = document.getElementById("username").value;
    // var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var contact = document.getElementById("contact").value;

    alert(username+" "+email+" "+password+" "+contact);
}