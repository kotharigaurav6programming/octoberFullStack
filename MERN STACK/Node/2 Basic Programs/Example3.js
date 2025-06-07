// Example showing the concept of Prototype
function Employee(){
    this.name = "Andrew Anderson";
    this.age = 67;
    this.show = function(){
        console.log("Name : "+this.name);
        console.log("Age : "+this.age);
    }
}
const emp = new Employee();
console.log("Name : "+emp.name);
emp.show();
