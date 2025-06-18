function Employee(){
    this.name="Andrew Anderson";
    this.age = 34;
    this.salary = 6789;
    this.address = {
        city : "Indore",
        state : "MP",
        country : "India",
        toString(){
            return this.city+", "+this.state+", "+this.country;
        }
    };
    this.pincode = 452010; 
}
const emp = new Employee();
module.exports=emp;
// console.log(module);


