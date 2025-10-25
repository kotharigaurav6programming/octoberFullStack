function myFun(obj){
    return `Hello ${obj.name}, your age is ${obj.age} and you live in ${obj.address}`;
}
var obj = {
    name : "Andrew Anderson",
    age  : 67,
    address : "Indore Madhya Pradesh"
}
const result = <h2>{myFun(obj)}</h2>
export default result;