const user = {
    name : "Andrew Anderson",
    age : 89,
    salary:3456,
    address:{
        state:"MP",
        country:"India",
        toString(){
            return this.state+" , "+this.country
        }
    } 
}
module.exports.userObj=user;
// console.log(module);


